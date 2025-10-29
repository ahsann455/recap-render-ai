const path = require('path');
const fs = require('fs').promises;

const DID_API_BASE = 'https://api.d-id.com';

function authHeader(apiKey) {
  const token = Buffer.from(`${apiKey}:`).toString('base64');
  return `Basic ${token}`;
}

const fetchFn = (...args) => (typeof fetch === 'function' ? fetch(...args) : import('node-fetch').then(m => m.default(...args)));

async function httpJson(url, opts = {}) {
  const res = await fetchFn(url, opts);
  if (!res.ok) {
    const t = await res.text();
    const status = res.status;
    throw new Error(`${status}: ${t}`);
  }
  return res.json();
}

async function createTalk({ text, voiceId = 'en-US-JennyNeural', driverUrl = 'https://create-images-results.d-id.com/DefaultPresenters/Noelle_f/image.jpeg', ratio = '16:9' }, apiKey) {
  return httpJson(`${DID_API_BASE}/talks`, {
    method: 'POST',
    headers: {
      'Authorization': authHeader(apiKey),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      script: {
        type: 'text',
        input: text,
        provider: { type: 'microsoft', voice_id: voiceId },
      },
      source_url: driverUrl,
      config: { ratio }
    })
  });
}

async function pollTalk(id, apiKey, { timeoutMs = 180000, intervalMs = 2000 } = {}) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const r = await fetchFn(`${DID_API_BASE}/talks/${id}`, {
      headers: { 'Authorization': authHeader(apiKey) }
    });
    if (!r.ok) {
      const t = await r.text();
      throw new Error(`D-ID poll failed (${r.status}): ${t}`);
    }
    const j = await r.json();
    if (j.result_url) return j.result_url;
    if (j.status === 'error') throw new Error(j.error || 'D-ID returned error');
    await new Promise(res => setTimeout(res, intervalMs));
  }
  throw new Error('D-ID polling timed out');
}

async function downloadToFile(url, outPath) {
  const r = await fetchFn(url);
  if (!r.ok) throw new Error(`Download failed: ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, buf);
  return outPath;
}

async function generateDidVideo({ text, voiceId, driverUrl, ratio }, outDir, apiKey) {
  const { id } = await createTalk({ text, voiceId, driverUrl, ratio }, apiKey);
  const resultUrl = await pollTalk(id, apiKey);
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const outMp4 = path.join(outDir, `did_${ts}.mp4`);
  await downloadToFile(resultUrl, outMp4);
  return outMp4;
}

module.exports = { generateDidVideo, createTalk, pollTalk, downloadToFile };