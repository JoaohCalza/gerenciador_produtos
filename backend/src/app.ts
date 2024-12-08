import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRoutes from './routes/products';
import categoryRoutes from './routes/categories';
import authRoutes from './routes/auth';

const app = express();

app.use(cors()); // Habilitar CORS antes das rotas
app.use(bodyParser.json());

app.use(productRoutes);
app.use(categoryRoutes);
app.use(authRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

export default app;
