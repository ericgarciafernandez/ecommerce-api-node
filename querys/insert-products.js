const connection = require('../db');

// ----- Crear registros -----
const insertQuery = 'INSERT INTO products (name, description, price, stock, image) VALUES ?';

const products = [
    { name: 'Cactus', description: 'Pequeña planta suculenta con espinas.', price: 9.99, stock: 50, image: 'https://via.placeholder.com/150' },
    { name: 'Margaritas', description: 'Flores blancas de jardín con pétalos delicados.', price: 12.99, stock: 40, image: 'https://via.placeholder.com/150' },
    { name: 'Rosas', description: 'Flores rojas o rosadas con un aroma embriagador.', price: 14.99, stock: 30, image: 'https://via.placeholder.com/150' },
    { name: 'Lavanda', description: 'Planta aromática con flores moradas.', price: 11.99, stock: 45, image: 'https://via.placeholder.com/150' },
    { name: 'Orquídea', description: 'Planta exótica con flores grandes y coloridas.', price: 19.99, stock: 25, image: 'https://via.placeholder.com/150' },
    { name: 'Tulipanes', description: 'Flores bulbosas con una variedad de colores brillantes.', price: 16.99, stock: 35, image: 'https://via.placeholder.com/150' },
    { name: 'Hortensias', description: 'Plantas de jardín con flores en forma de pompones.', price: 18.99, stock: 28, image: 'https://via.placeholder.com/150' },
    { name: 'Jazmín', description: 'Planta trepadora con flores blancas muy fragantes.', price: 15.99, stock: 20, image: 'https://via.placeholder.com/150' },
    { name: 'Lirios', description: 'Flores elegantes y perfumadas en forma de trompeta.', price: 17.99, stock: 22, image: 'https://via.placeholder.com/150' },
    { name: 'Begonias', description: 'Plantas de interior con hojas decorativas y flores vibrantes.', price: 13.99, stock: 30, image: 'https://via.placeholder.com/150' },
    { name: 'Peonías', description: 'Flores exuberantes y fragantes en una variedad de colores.', price: 21.99, stock: 18, image: 'https://via.placeholder.com/150' },
    { name: 'Claveles', description: 'Flores de jardín tradicionales con un aroma dulce.', price: 10.99, stock: 40, image: 'https://via.placeholder.com/150' },
    { name: 'Crásulas', description: 'Plantas suculentas con hojas redondas y carnudas.', price: 8.99, stock: 55, image: 'https://via.placeholder.com/150' },
    { name: 'Bambú', description: 'Planta ornamental de rápido crecimiento con tallos delgados y flexibles.', price: 20.99, stock: 15, image: 'https://via.placeholder.com/150' },
    { name: 'Aloe Vera', description: 'Planta suculenta conocida por sus propiedades medicinales.', price: 9.99, stock: 60, image: 'https://via.placeholder.com/150' },
    { name: 'Helechos', description: 'Plantas de interior con frondas verdes y exuberantes.', price: 14.99, stock: 25, image: 'https://via.placeholder.com/150' },
    { name: 'Azaleas', description: 'Plantas de jardín con flores en forma de campana en una variedad de colores.', price: 16.99, stock: 30, image: 'https://via.placeholder.com/150' },
    { name: 'Suculenta', description: 'Pequeñas plantas suculentas perfectas para interiores.', price: 7.99, stock: 60, image: 'https://via.placeholder.com/150' },
    { name: 'Bonsái', description: 'Árboles miniaturizados cultivados en macetas pequeñas.', price: 24.99, stock: 15, image: 'https://via.placeholder.com/150' },
    { name: 'Violetas africanas', description: 'Plantas de interior con flores vibrantes y hojas aterciopeladas.', price: 11.99, stock: 25, image: 'https://via.placeholder.com/150' }
];

const eachProduct = products.map((el) => [
    el.name,
    el.description,
    el.price,
    el.stock,
    el.image
]);

connection.query(insertQuery, [eachProduct], (err, results) => {
    if (err) {
        console.error('Error al insertar productos: ' + err);
        return;
    }
    console.log('Productos insertados!');
});