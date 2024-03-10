const express = require('express');
const app = express();
const PORT = 3001;
const connection = require('./db.js');

// Middleware para manejar JSON
app.use(express.json());

const getAllProducts = (callback) => {
    const selectQuery = 'SELECT * FROM products';

    connection.query(selectQuery, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta SELECT: ' + err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

// Rutas
app.get('/productos', (request, response) => {
    getAllProducts((err, results) => {
        if (err) {
            response.status(500).send('Error en el servidor');
            return;
        }
        response.json(results);
    })
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});