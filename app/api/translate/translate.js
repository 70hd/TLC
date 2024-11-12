// pages/api/translate.js
import axios from 'axios';

export default async function handler(req, res) {
  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    return res.status(400).json({ error: "Missing text or target language" });
  }

  try {
    const response = await axios.post('https://libretranslate.com/translate', {
      q: text,
      source: 'en',  // Assuming English as the source language
      target: targetLanguage,
      format: 'text'
    });

    const translation = response.data.translatedText;

    // Return the translated text
    return res.status(200).json({ translation });
  } catch (error) {
    console.error("Translation error:", error);
    return res.status(500).json({ error: "Failed to translate text" });
  }
}
