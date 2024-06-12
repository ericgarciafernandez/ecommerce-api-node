const { Client } = require("pg");
require("dotenv").config();

// Configuración de la conexión a la base de datos
const client = new Client({
  connectionString: process.env.POSTGRES_URL, // o cualquier otra variable de entorno que contenga la URL de conexión
  ssl: {
    rejectUnauthorized: false, // Esto puede ser necesario dependiendo de la configuración de tu base de datos
  },
});

// Conectar a la base de datos PostgreSQL
client
  .connect()
  .then(() => console.log("Conexión exitosa a PostgreSQL"))
  .catch((err) => console.error("Error al conectar con PostgreSQL:", err));

module.exports = client;
