const express = require('express');
const app = express();
const PORT = 3000;
// Middleware para saludar por la consola
app.use((req, res, next) => {
    console.log(`¡Middleware saludando por la consola! URL: ${req.originalUrl}`);
    next(); // Llama al siguiente middleware en la cadena o a la ruta manejadora
  });
  //habilitar el manejo de archivos estaticos  
app.use(express.static('public'));
app.use('/imagenes', express.static('imagenes'));
// Ruta de inicio
app.get('/', (req, res) => {
  res.status(200).send('¡Bienvenido al servidor simple en el puerto 3000!');
});
// Nueva ruta
app.get('/otraruta', (req, res) => {
    res.status(200).send('¡Esta es otra ruta en el servidor!');
  });
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`El servidor está escuchando en http://localhost:${PORT}`);
});
