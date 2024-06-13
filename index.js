const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const app = express();
const PORT = 3001;
const connection = require("./db.js");
require("dotenv").config();

// Middleware para manejar JSON
app.use(express.json());
// Uso de cors
app.use(cors());
// Declaramos stripe
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

// ----- Funciones -----
async function getAllProducts() {
  const selectQuery = "SELECT * FROM products";

  return new Promise((resolve, reject) => {
    connection.query(selectQuery, (err, results) => {
      if (err) {
        console.error("Error al ejecutar la consulta SELECT: " + err);
        reject(err);
        return;
      }
      resolve(results.rows);
    });
  });
}

async function getSpecificProduct(id) {
  const selectQuery = "SELECT * FROM products WHERE id = " + id;

  return new Promise((resolve, reject) => {
    connection.query(selectQuery, (err, results) => {
      if (err) {
        console.error("Error al ejecutar la consulta SELECT: " + err);
        reject(err);
        return;
      }
      resolve(results.rows);
    });
  });
}

async function getCategory(category) {
  const selectQuery = "SELECT * FROM products WHERE category = ?";
  return new Promise((resolve, reject) => {
    connection.query(selectQuery, category, (err, results) => {
      if (err) {
        console.error("Error al ejecutar la consulta SELECT: " + err);
        reject(err);
        return;
      }
      resolve(results.rows);
    });
  });
}

// ----- Rutas -----
app.get("/products", async function (request, response) {
  try {
    const result = await getAllProducts();
    response.json(result);
  } catch (error) {
    response.status(500).send("Error en el servidor");
  }
});

app.get("/products/:id", async function (request, response) {
  try {
    const id = request.params.id;
    const result = await getSpecificProduct(id);
    response.json(result);
  } catch (error) {
    response.status(500).send("Error en el servidor");
  }
});

app.get("/categorias/:category", async function (request, response) {
  try {
    const category = request.params.category;
    const result = await getCategory(category);
    response.json(result);
  } catch (error) {
    response.status(500).send("Error en el servidor");
  }
});

app.get("/", function (request, response) {
  response.send("Home");
});

app.post("/create-checkout-session", async (request, response) => {
  const cart = request.body;

  // Mapeamos el carrito para configurar los line_items para Stripe
  const line_items = cart.map((item) => ({
    price_data: {
      currency: "eur",
      product_data: {
        name: item.name,
        description: item.description, // Asegúrate de que tu objeto `item` tenga una propiedad `description`
      },
      unit_amount: Math.round(item.price * 100), // Stripe trabaja con centavos, así que multiplicamos por 100
    },
    quantity: item.quantity, // Asegúrate de que tu objeto `item` tenga una propiedad `quantity`
  }));

  console.log(line_items);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: line_items,
    mode: "payment",
    success_url: "http://localhost:3000/",
    cancel_url: "http://localhost:3000/",
  });

  return response.json(session);
});

app.get("/success", (request, response) => response.send("success"));

app.get("/cancel", (request, response) => response.send("cancel"));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
