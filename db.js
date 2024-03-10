const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '429M7e$6+.F[',
    database: 'shop'
});

module.exports = connection;

// ----- Conectar a la base de datos MySQL -----

// connection.connect((err) => {
//     if (err) {
//         console.error('Error al conectar con MySQL: ' + err);
//         return;
//     }
//     console.log('Conexión con MySQL');

//     connection.end();
// });