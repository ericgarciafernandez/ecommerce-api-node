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

async function getAllProducts() {
    const selectQuery = 'SELECT * FROM products';

    return await connection.query(selectQuery, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta SELECT: ' + err);
            reject(err);
            return;
        }
        resolve(results);
    });
}


async function getSpecificProduct(id) {
    const selectQuery = 'SELECT * FROM products WHERE id = ' + id;

    return await connection.query(selectQuery, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta SELECT: ' + err);
            reject(err);
            return;
        }
        resolve(results);
    });
}

async function getCategory(category) {
    const selectQuery = 'SELECT * FROM products WHERE category = ?';
    return await connection.query(selectQuery, category, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta SELECT: ' + err);
            reject(err);
            return;
        }
        resolve(results);
    });
}

// Rutas
app.get('/products', async function (request, response) {
    try {
        const result = await getAllProducts();
        response.json(result);
    } catch (error) {
        response.status(500).send('Error en el servidor');
    }
});

app.get('/products/:id', async function (request, response) {
    try {
        const id = request.params.id;
        const result = await getSpecificProduct(id);
        response.json(result);
    } catch (error) {
        response.status(500).send('Error en el servidor');
    }
});

app.get('/categorias/:category', async function (request, response) {
    try {
        const category = request.params.category;
        const result = await getCategory(category);
        response.json(result)
    } catch (error) {
        response.status(500).send('Error en el servidor');
    }
});

app.post('/api/checkout', async function (request, response) {
    try {
        const { id, amount } = request.body;
        await stripe.paymentIntents.create({
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

app.get('/', function (response) {
    response.send('Home');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});