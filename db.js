const mysql = require("mysql");

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: "ep-delicate-hat-a289e458-pooler.eu-central-1.aws.neon.tech",
  user: "default",
  password: "qRQa6XP4VIDr",
  database: "verceldb",
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
