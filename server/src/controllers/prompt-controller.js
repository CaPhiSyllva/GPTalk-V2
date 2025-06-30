import openai from '../config/openai.js';

export default {
  async sendText(req, res) {
    const { prompt } = req.body;

    // Validação mais robusta
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length < 3) {
      return res.status(400).json({
        success: false,
        error: "Prompt inválido. Deve ter pelo menos 3 caracteres."
      });
    }

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4.1", 
        messages: [{ 
          role: "user", 
          content: prompt 
        }],
        temperature: 0.7,
        max_tokens: 1000,
    
      });

      return res.status(200).json({
        success: true,
        data: response.choices[0].message.content
      });

    } catch (error) {
      console.error("Erro na API OpenAI:", error);
      
      let statusCode = 500;
      let errorMessage = "Erro interno no servidor";
      
      // Tratamento de erros
      if (error.status === 429) {
        statusCode = 429;
        errorMessage = "Limite de requisições excedido. Tente novamente mais tarde.";
      } else if (error.status === 401) {
        statusCode = 401;
        errorMessage = "Chave API inválida. Verifique suas credenciais.";
      } else if (error.response?.data?.error?.message) {
        errorMessage = error.response.data.error.message;
        statusCode = 400;
      } else if (error.message) {
        errorMessage = error.message;
      }

      return res.status(statusCode).json({
        success: false,
        error: errorMessage
      });
    }
  }
};
