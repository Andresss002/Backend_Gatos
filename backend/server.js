const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use(cors());
app.use(express.json());

// Middleware para archivos subidos
const uploadRoutes = require('./routes/upload');
app.use('/api/upload', uploadRoutes);
app.use('/uploads', express.static('uploads'));

// Rutas
const catsRoutes = require('./routes/cats');
app.use('/api/cats', catsRoutes);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Adopción de Gatos!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
