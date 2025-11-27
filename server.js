import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import celularesRouter from './routes/celular.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/celulares', celularesRouter);

app.get('/', (req, res) => {
  res.send({ msg: 'API de celulares funcionando' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
    });
  })
  .catch(err => console.error("Error al conectar MongoDB:", err));
