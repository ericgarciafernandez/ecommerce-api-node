const express = require('express');
var cors = require('cors');
const app = express();
const PORT = 3001;
const connection = require('./db.js');

// Middleware para manejar JSON
app.use(express.json());

// Uso de cors
app.use(cors());

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

const getSpecificProduct = (id, callback) => {
    const selectQuery = 'SELECT * FROM products WHERE id = ' + id;
    connection.query(selectQuery, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta SELECT: ' + err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

const getCategory = (category, callback) => {
    const selectQuery = 'SELECT * FROM products WHERE category = ?';
    connection.query(selectQuery, category, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta SELECT: ' + err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

const setProduct = (id, data, callback) => {
    const updateQuery = 'UPDATE products SET ? WHERE id = ?';

    connection.query(updateQuery, /* Parámetros que vienen de request.body */(err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta UPDATE: ' + err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

// Rutas
app.get('/products', (request, response) => {
    getAllProducts((err, results) => {
        if (err) {
            response.status(500).send('Error en el servidor');
            return;
        }
        response.json(results);
    });
});

app.route('/products/:id')
    .get(function (request, response) {
        const id = request.params.id;
        console.log(request.body);
        getSpecificProduct(id, (err, results) => {
            if (err) {
                response.status(500).send('Error en el servidor');
                return;
            }
            response.json(results);
        });
    })
    .post(function (request, response) {
        const id = request.params.id;
        const data = request.body;
        setProduct(id, data, (err, results) => {
            if (err) {
                response.status(500).send('Error en el servidor');
                return;
            }
            response.json(results);
        });
    });
;

app.get('/categories/:category', (request, response) => {
    const category = request.params.category;
    getCategory(category, (err, results) => {
        if (err) {
            response.status(500).send('Error en el servidor');
            return;
        }
        response.json(results);
    });
});

app.get('/', (request, response) => {
    response.send('Home');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});