import app from "./app.js";

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Health check: http://localhost:${port}/health`);
    
    if (process.env.OPEN_AI_KEY) {
        console.log("OpenAI API Key: Configurada com sucesso");
    } else {
        console.error("ERRO: OPEN_AI_KEY não definida no .env");
    }
});