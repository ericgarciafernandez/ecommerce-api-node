const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const app = express();
const PORT = 3001;
const connection = require('./db.js');
require('dotenv').config();

// Middleware para manejar JSON
app.use(express.json());

// Uso de cors
app.use(cors());

// Declaramos stripe
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

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

app.get('/products/:id', (request, response) => {
    const id = request.params.id;
    getSpecificProduct(id, (err, results) => {
        if (err) {
            response.status(500).send('Error en el servidor');
            return;
        }
        response.json(results);
    });
});

app.get('/categorias/:category', (request, response) => {
    const category = request.params.category;
    getCategory(category, (err, results) => {
        if (err) {
            response.status(500).send('Error en el servidor');
            return;
        }
        response.json(results);
    });
});

app.post('/api/checkout', async (request, response) => {
    try {
        const { id, amount } = request.body;
        const payment = await stripe.paymentIntents.create({
            payment_method: id,
            amount,
            currency: "USD",
            description: "",
        });
        response.send({ message: "Successful payment" });
    } catch (error) {
        response.json({ message: error.raw.message });
    }
});

app.get('/', (request, response) => {
    response.send('Home');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});