const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;
const { generateVideoFromTextFile } = require('../services/video');
const documentParser = require('../services/documentParser');
const { generateDidVideo } = require('../services/did.cjs');
const { generateAvatarLectureFromText } = require('../services/sceneComposer');

// POST /api/video/generate
// Body: { documentId?: string, text?: string, options?: { ttsProvider, theme, fps, width, height, voice, music, font, kenburns } }
router.post('/generate', async (req, res) => {
  try {
    const { documentId, text, options = {} } = req.body || {};

    if (!documentId && !text) {
      return res.status(400).json({ error: 'Provide either documentId or text' });
    }

    // Ensure scripts dir exists
    const scriptsDir = path.join(__dirname, '..', 'outputs', 'scripts');
    await fs.mkdir(scriptsDir, { recursive: true });

    let scriptPath;

    if (text && typeof text === 'string' && text.trim()) {
      // Save provided text to a temp .md
      const ts = Date.now();
      scriptPath = path.join(scriptsDir, `script_${ts}.md`);
      await fs.writeFile(scriptPath, text, 'utf-8');
    } else if (documentId) {
      // Parse uploaded doc into text, save as .md
      const uploadsPath = path.join(__dirname, '..', 'uploads', documentId);
      const ext = path.extname(documentId).toLowerCase();
      const mimeTypes = {
        '.pdf': 'application/pdf',
        '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        '.doc': 'application/msword',
        '.txt': 'text/plain'
      };
      const mime = mimeTypes[ext];
      if (!mime) return res.status(400).json({ error: 'Unsupported file type' });

      const textContent = await documentParser.parseDocument(uploadsPath, mime);
      const ts = Date.now();
      scriptPath = path.join(scriptsDir, `${path.basename(documentId, ext)}_${ts}.md`);
      await fs.writeFile(scriptPath, textContent, 'utf-8');
    }

    const outputsDir = path.join(__dirname, '..', 'outputs');
    let outMp4, outSrt;

    if (options && options.provider === 'did') {
      const textContent = await fs.readFile(scriptPath, 'utf-8');
      const apiKey = process.env.DID_API_KEY;
      if (!apiKey) {
        throw new Error('Missing DID_API_KEY in environment');
      }
      const videosDir = path.join(outputsDir, 'videos');
      outMp4 = await generateDidVideo({
        text: textContent,
        voiceId: options.voiceId || 'en-US-JennyNeural',
        driverUrl: options.driverUrl || 'https://create-images-results.d-id.com/DefaultPresenters/Noelle_f/image.jpeg',
        ratio: (options.ratio || '16:9')
      }, videosDir, apiKey);
      outSrt = null; // D-ID does not provide SRT directly in this minimal flow
    } else if (options && options.provider === 'did-scene') {
      // Scene-aware avatar composition
      const projectRoot = path.join(__dirname, '..', '..');
      const { scenesJson } = await generateAvatarLectureFromText(await fs.readFile(scriptPath, 'utf-8'), options, projectRoot);
      // Call python composer
      const { spawn } = require('child_process');
      const py = path.join(projectRoot, '.venv', 'Scripts', 'python.exe');
      const outDir = path.join(__dirname, '..', 'outputs', 'videos');
      await fs.mkdir(outDir, { recursive: true });
      const outPath = path.join(outDir, `lecture_scene_${Date.now()}.mp4`);
      await new Promise((resolve, reject) => {
        const child = (spawn)(py, ['-m', 'src.video_lecture.scene_cli', scenesJson, '--output', outPath], { cwd: projectRoot });
        let err = '';
        child.stderr?.on('data', d => err += String(d));
        child.on('close', code => code === 0 ? resolve() : reject(new Error(err || `composer exit ${code}`)));
      });
      outMp4 = outPath;
      outSrt = null;
    } else {
      const resPy = await generateVideoFromTextFile(scriptPath, options);
      outMp4 = resPy.outMp4;
      outSrt = resPy.outSrt;
    }

    // Build public URLs
    const videosRel = path.relative(path.join(__dirname, '..'), outMp4).replace(/\\/g, '/');
    const srtRel = outSrt ? path.relative(path.join(__dirname, '..'), outSrt).replace(/\\/g, '/') : null;

    res.json({
      success: true,
      videoPath: outMp4,
      srtPath: outSrt,
      videoUrl: `/outputs/${videosRel.split('outputs/')[1]}`,
      srtUrl: srtRel ? `/outputs/${srtRel.split('outputs/')[1]}` : null,
      message: 'Video generated successfully'
    });
  } catch (error) {
    console.error('Video generation error:', error);
    res.status(500).json({ error: 'Failed to generate video', message: error.message });
  }
});

module.exports = router;
