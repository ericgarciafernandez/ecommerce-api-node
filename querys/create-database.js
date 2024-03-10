
const connection = require('../db');

// ----- Crear base de datos -----
const createDatabaseQuery = "CREATE DATABASE IF NOT EXISTS shop";

// Ejecutar la consulta para crear la base de datos
connection.query(createDatabaseQuery, (err, results) => {
    if (err) {
        console.error('Error al crear la base de datos');
        return;
    }
    console.log('Base de datos creada!');
});