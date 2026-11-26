import express from 'express';
import servicesRouter from './routes/services.routes.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Alex & Maty Dashboard API');
});

app.use('/api/services', servicesRouter);

app.use((req, res) => {
  res.status(404).send('Rotta non trovata');
});

export default app;
