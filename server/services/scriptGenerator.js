const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

class ScriptGenerator {
  /**
   * Generate lecture script based on mode and style
   */
  async generateScript(text, mode, style) {
    const prompts = this.getPrompt(mode, style);
    
    try {
      const prompt = `${prompts.system}\n\n${prompts.user}\n\nNotes:\n${text}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      throw new Error(`Script generation failed: ${error.message}`);
    }
  }

  /**
   * Get prompt templates based on mode and style
   */
  getPrompt(mode, style) {
    const basePrompts = {
      summary: {
        system: 'You are an expert educator creating concise, engaging lecture scripts. Focus on key concepts and main ideas.',
        user: 'Create a summary lecture script covering the main points and key concepts from these notes. Keep it concise but comprehensive.'
      },
      detailed: {
        system: 'You are an expert educator creating detailed, comprehensive lecture scripts. Explain concepts thoroughly with examples.',
        user: 'Create a detailed lecture script that thoroughly explains all concepts from these notes. Include examples and explanations.'
      },
      test: {
        system: 'You are an expert educator creating test preparation lecture scripts. Focus on likely exam questions and solutions.',
        user: 'Create a test prep lecture script. Identify key topics, generate likely exam questions, and provide clear solutions with explanations.'
      }
    };

    const styleModifiers = {
      professor: '\n\nFormat: Write as if you are a professor teaching in front of a class. Use conversational language, engage students, and explain as you would write on a board.',
      visual: '\n\nFormat: Write in a way that can be visualized. Include descriptions of diagrams, charts, or visual metaphors that would help explain concepts.'
    };

    const prompt = basePrompts[mode];
    prompt.user += styleModifiers[style];

    return prompt;
  }

  /**
   * Generate scene breakdown for video production
   */
  async generateSceneBreakdown(script) {
    try {
      const prompt = `You are a video production assistant. Break down lecture scripts into scenes with timing and visual descriptions.

Break this lecture script into scenes for video production. For each scene, provide:
1. Scene number
2. Duration (in seconds)
3. Narration text
4. Visual description

Script:
${script}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      throw new Error(`Scene breakdown generation failed: ${error.message}`);
    }
  }
}

module.exports = new ScriptGenerator();
