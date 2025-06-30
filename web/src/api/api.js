import axios from 'axios';

const URL_API = 'http://localhost:5000/api/prompt';

export const makeRequest = async (prompt) => {  // Recebe apenas a string
  console.log("Enviando prompt:", prompt);
  
  try {
    const { data } = await axios.post(URL_API, {
      prompt: prompt  // Envia como {prompt: "sua mensagem"}
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error.response?.data || error.message);
    throw error;
  }
};