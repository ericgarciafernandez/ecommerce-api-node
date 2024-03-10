const connection = require('../db');

// ----- Crear registros -----
const insertQuery = 'INSERT INTO products (name, description, price, stock) VALUES ?';
const eachProduct = products.map((el) => [
    el.name,
    el.description,
    el.price,
    el.stock
]);

connection.query(insertQuery, [eachProduct], (err, results) => {
    if (err) {
        console.error('Error al insertar productos: ' + err);
        return;
    }
    console.log('Productos insertados!');
});

const products = [
    { name: 'Camiseta', description: 'Camiseta de algodón', price: 15.99, stock: 100 },
    { name: 'Pantalón', description: 'Pantalón vaquero', price: 29.99, stock: 50 },
    { name: 'Zapatos deportivos', description: 'Zapatos deportivos para correr', price: 49.99, stock: 30 },
    { name: 'Reloj de pulsera', description: 'Reloj analógico con correa de cuero', price: 79.99, stock: 20 },
    { name: 'Teléfono móvil', description: 'Teléfono inteligente con cámara de alta resolución', price: 299.99, stock: 15 },
    { name: 'Tablet', description: 'Tablet con pantalla táctil de 10 pulgadas', price: 199.99, stock: 25 },
    { name: 'Teclado inalámbrico', description: 'Teclado ergonómico con conexión Bluetooth', price: 49.99, stock: 30 },
    { name: 'Ratón óptico', description: 'Ratón inalámbrico con sensor óptico de precisión', price: 19.99, stock: 40 },
    { name: 'Auriculares Bluetooth', description: 'Auriculares inalámbricos con cancelación de ruido', price: 79.99, stock: 20 },
    { name: 'Altavoz portátil', description: 'Altavoz Bluetooth resistente al agua', price: 59.99, stock: 30 },
    { name: 'Mochila', description: 'Mochila ergonómica con compartimento para portátil', price: 39.99, stock: 50 },
    { name: 'Cámara digital', description: 'Cámara compacta con zoom óptico de 10x', price: 199.99, stock: 15 },
    { name: 'Impresora multifunción', description: 'Impresora láser con escáner y copiadora', price: 129.99, stock: 10 },
    { name: 'Smartwatch', description: 'Reloj inteligente con monitor de actividad física', price: 149.99, stock: 20 },
    { name: 'Gafas de sol', description: 'Gafas de sol polarizadas con montura de metal', price: 29.99, stock: 40 },
    { name: 'Portátil', description: 'Portátil con procesador Intel Core i7 y 16GB de RAM', price: 999.99, stock: 10 },
    { name: 'Monitor de 24 pulgadas', description: 'Monitor LED Full HD con puerto HDMI', price: 149.99, stock: 20 },
    { name: 'Licuadora', description: 'Licuadora con vaso de vidrio y cuchillas de acero inoxidable', price: 49.99, stock: 30 },
    { name: 'Silla de oficina', description: 'Silla ergonómica con respaldo ajustable', price: 129.99, stock: 15 },
    { name: 'Juego de sartenes', description: 'Juego de sartenes antiadherentes de 3 piezas', price: 59.99, stock: 25 }
];
