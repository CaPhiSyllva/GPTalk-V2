// src/config/openai.js
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

// Adicione esta verificação para debug
console.log('OPEN_AI_KEY:', process.env.OPEN_AI_KEY ? '***' : 'Não encontrada');

if (!process.env.OPEN_AI_KEY) {
  throw new Error("OPEN_AI_KEY não definida! Verifique seu arquivo .env");
}

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
  timeout: 30000,
  maxRetries: 2,
});

export default openai;