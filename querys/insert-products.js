const connection = require('../db');

// ----- Crear registros -----
const insertQuery = 'INSERT INTO products (name, description, price, stock, image, category) VALUES ?';

const products = [
    // Productos de la categoría "Interior"
    { name: 'Cactus', description: 'Pequeña planta suculenta con espinas.', price: 9.99, stock: 50, image: 'https://via.placeholder.com/150', category: 'Interior' },
    { name: 'Suculenta Haworthia', description: 'Planta suculenta en forma de roseta.', price: 12.99, stock: 30, image: 'https://via.placeholder.com/150', category: 'Interior' },
    { name: 'Palmera Areca', description: 'Planta de interior de hojas verdes y frondosas.', price: 29.99, stock: 20, image: 'https://via.placeholder.com/150', category: 'Interior' },
    { name: 'Ficus Lyrata', description: 'Planta de interior con hojas grandes y brillantes.', price: 39.99, stock: 15, image: 'https://via.placeholder.com/150', category: 'Interior' },
    { name: 'Aloe Vera', description: 'Planta suculenta conocida por sus propiedades medicinales.', price: 7.99, stock: 40, image: 'https://via.placeholder.com/150', category: 'Interior' },
    // Productos de la categoría "Exterior
    { name: 'Rosa Miniatura', description: 'Pequeña rosa en maceta para decoración de jardines.', price: 14.99, stock: 25, image: 'https://via.placeholder.com/150', category: 'Exterior' },
    { name: 'Hortensia', description: 'Planta de jardín con flores en forma de pompones.', price: 19.99, stock: 20, image: 'https://via.placeholder.com/150', category: 'Exterior' },
    { name: 'Jazmín', description: 'Planta trepadora con flores blancas muy fragantes.', price: 17.99, stock: 30, image: 'https://via.placeholder.com/150', category: 'Exterior' },
    { name: 'Lavanda', description: 'Planta aromática con flores moradas.', price: 11.99, stock: 35, image: 'https://via.placeholder.com/150', category: 'Exterior' },
    { name: 'Ficus Benjamina', description: 'Árbol de hoja perenne para paisajismo de jardines.', price: 49.99, stock: 10, image: 'https://via.placeholder.com/150', category: 'Exterior' },
    // Productos de la categoría "Jardín"
    { name: 'Rosa Trepadora', description: 'Planta trepadora con flores grandes y coloridas.', price: 24.99, stock: 15, image: 'https://via.placeholder.com/150', category: 'Jardín' },
    { name: 'Árbol de Manzanas', description: 'Árbol frutal con deliciosas manzanas.', price: 59.99, stock: 8, image: 'https://via.placeholder.com/150', category: 'Jardín' },
    { name: 'Tulipanes Mixtos', description: 'Paquete de bulbos de tulipanes en varios colores.', price: 19.99, stock: 30, image: 'https://via.placeholder.com/150', category: 'Jardín' },
    { name: 'Arbusto de Boj', description: 'Arbusto de hoja perenne para bordes de jardines.', price: 34.99, stock: 12, image: 'https://via.placeholder.com/150', category: 'Jardín' },
    { name: 'Fresa Albion', description: 'Planta de fresa perenne para huertos y macetas.', price: 6.99, stock: 40, image: 'https://via.placeholder.com/150', category: 'Jardín' },
    // Productos de la categoría "Hierbas"
    { name: 'Albahaca Genovesa', description: 'Hierba aromática perfecta para pesto y cocina italiana.', price: 3.99, stock: 50, image: 'https://via.placeholder.com/150', category: 'Hierbas' },
    { name: 'Cilantro', description: 'Hierba culinaria esencial para guacamoles y salsas.', price: 2.99, stock: 60, image: 'https://via.placeholder.com/150', category: 'Hierbas' },
    { name: 'Romero', description: 'Hierba aromática con propiedades medicinales y culinarias.', price: 4.99, stock: 45, image: 'https://via.placeholder.com/150', category: 'Hierbas' },
    { name: 'Menta', description: 'Hierba fresca y aromática para infusiones y cócteles.', price: 3.49, stock: 55, image: 'https://via.placeholder.com/150', category: 'Hierbas' },
    { name: 'Perejil', description: 'Hierba versátil y nutritiva para adornar platos y ensaladas.', price: 2.49, stock: 65, image: 'https://via.placeholder.com/150', category: 'Hierbas' },
];

const eachProduct = products.map((el) => [
    el.name,
    el.description,
    el.price,
    el.stock,
    el.image,
    el.category
]);

connection.query(insertQuery, [eachProduct], (err, results) => {
    if (err) {
        console.error('Error al insertar productos: ' + err);
        return;
    }
    console.log('Productos insertados!');
});