const express = require('express');
const app = express();
const port = 3000;

// Ruta para obtener el contenido del footer
app.get('/api/footer', (req, res) => {
  const footerContent = {
    contactInfo: 'Dirección: 123 Calle Principal, Ciudad',
    links: [
      { title: 'Inicio', url: '/' },
      { title: 'Acerca de nosotros', url: '/about' },
      { title: 'Contacto', url: '/contact' }
    ],
    copyright: '© 2024 Todos los derechos reservados.'
  };

  res.json(footerContent);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});