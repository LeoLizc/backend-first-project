import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Creacion del app
const app = express();

// Conexión a MongoDB usando mongoose
import './database.js';

// settings
app.set('port', process.env.PORT || 8080);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

import userRoutes from './user/user.routes.js'
app.use('/user', userRoutes)

// Endpoint para 404
app.use((_req, res) => {
  res.status(404).json({ message: 'Not found.' });
});

export default app;