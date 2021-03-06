const express = require('express');
const path = require('path');
const app = express();

/* Configuraciones */
app.use(
express.static(path.resolve(__dirname, 'public'))
);

/* Rutas */
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

/* Server */
app.listen(process.env.PORT || 3005, () => console.log('Servidor corriendo en puerto 3005'));


