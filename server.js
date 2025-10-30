const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  // AÑADE ESTA LÍNEA PARA FORMULARIOS HTML
app.use(express.static('.')); // Sirve archivos estáticos
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));


// Ruta para servir index.html en la raíz
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
