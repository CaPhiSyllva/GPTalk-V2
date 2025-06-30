import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rotas
app.use(routes);

// Rota de health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error('Erro global:', err);
  res.status(500).json({ error: 'Erro interno no servidor' });
});

export default app;