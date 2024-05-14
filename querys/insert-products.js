const connection = require("../db");

// ----- Crear registros -----
const insertQuery =
  "INSERT INTO products (name, description, price, stock, image, category) VALUES ?";

const products = [
  // Productos de la categoría "Interior"
  {
    name: "Cactus",
    description: "Pequeña planta suculenta con espinas.",
    price: 9.99,
    stock: 50,
    image:
      "https://images.pexels.com/photos/1856430/pexels-photo-1856430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
  },
  {
    name: "Suculenta Haworthia",
    description: "Planta suculenta en forma de roseta.",
    price: 12.99,
    stock: 30,
    image:
      "https://images.pexels.com/photos/9707260/pexels-photo-9707260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
  },
  {
    name: "Palmera Areca",
    description: "Planta de interior de hojas verdes y frondosas.",
    price: 29.99,
    stock: 20,
    image:
      "https://images.pexels.com/photos/11166333/pexels-photo-11166333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
  },
  {
    name: "Ficus Lyrata",
    description: "Planta de interior con hojas grandes y brillantes.",
    price: 39.99,
    stock: 15,
    image:
      "https://images.pexels.com/photos/7084312/pexels-photo-7084312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
  },
  {
    name: "Aloe Vera",
    description: "Planta suculenta conocida por sus propiedades medicinales.",
    price: 7.99,
    stock: 40,
    image:
      "https://images.pexels.com/photos/1581101/pexels-photo-1581101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
  },
  // Productos de la categoría "Exterior
  {
    name: "Rosa Miniatura",
    description: "Pequeña rosa en maceta para decoración de jardines.",
    price: 14.99,
    stock: 25,
    image:
      "https://images.pexels.com/photos/23319754/pexels-photo-23319754/free-photo-of-flor-de-loto-rosa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Exterior",
  },
  {
    name: "Hortensia",
    description: "Planta de jardín con flores en forma de pompones.",
    price: 19.99,
    stock: 20,
    image:
      "https://images.pexels.com/photos/414510/pexels-photo-414510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Exterior",
  },
  {
    name: "Jazmín",
    description: "Planta trepadora con flores blancas muy fragantes.",
    price: 17.99,
    stock: 30,
    image:
      "https://images.pexels.com/photos/7683632/pexels-photo-7683632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Exterior",
  },
  {
    name: "Lavanda",
    description: "Planta aromática con flores moradas.",
    price: 11.99,
    stock: 35,
    image:
      "https://images.pexels.com/photos/12652580/pexels-photo-12652580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Exterior",
  },
  {
    name: "Ficus Benjamina",
    description: "Árbol de hoja perenne para paisajismo de jardines.",
    price: 49.99,
    stock: 10,
    image:
      "https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Exterior",
  },
  // Productos de la categoría "Jardín"
  {
    name: "Rosa Trepadora",
    description: "Planta trepadora con flores grandes y coloridas.",
    price: 24.99,
    stock: 15,
    image:
      "https://images.pexels.com/photos/20082647/pexels-photo-20082647/free-photo-of-naturaleza-petalos-planta-flor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Jardín",
  },
  {
    name: "Árbol de Manzanas",
    description: "Árbol frutal con deliciosas manzanas.",
    price: 59.99,
    stock: 8,
    image:
      "https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Jardín",
  },
  {
    name: "Tulipanes Mixtos",
    description: "Paquete de bulbos de tulipanes en varios colores.",
    price: 19.99,
    stock: 30,
    image:
      "https://images.pexels.com/photos/20067276/pexels-photo-20067276/free-photo-of-flores-petalos-plantas-ramo-de-flores.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Jardín",
  },
  {
    name: "Arbusto de Boj",
    description: "Arbusto de hoja perenne para bordes de jardines.",
    price: 34.99,
    stock: 12,
    image:
      "https://images.pexels.com/photos/20115405/pexels-photo-20115405/free-photo-of-flores-edificio-arbusto-matorral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Jardín",
  },
  {
    name: "Fresa Albion",
    description: "Planta de fresa perenne para huertos y macetas.",
    price: 6.99,
    stock: 40,
    image:
      "https://images.pexels.com/photos/1750468/pexels-photo-1750468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Jardín",
  },
  // Productos de la categoría "Hierbas"
  {
    name: "Albahaca Genovesa",
    description: "Hierba aromática perfecta para pesto y cocina italiana.",
    price: 3.99,
    stock: 50,
    image:
      "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Hierbas",
  },
  {
    name: "Cilantro",
    description: "Hierba culinaria esencial para guacamoles y salsas.",
    price: 2.99,
    stock: 60,
    image:
      "https://images.pexels.com/photos/9449088/pexels-photo-9449088.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Hierbas",
  },
  {
    name: "Romero",
    description: "Hierba aromática con propiedades medicinales y culinarias.",
    price: 4.99,
    stock: 45,
    image:
      "https://images.pexels.com/photos/4750309/pexels-photo-4750309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Hierbas",
  },
  {
    name: "Menta",
    description: "Hierba fresca y aromática para infusiones y cócteles.",
    price: 3.49,
    stock: 55,
    image:
      "https://images.pexels.com/photos/4599920/pexels-photo-4599920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Hierbas",
  },
  {
    name: "Perejil",
    description: "Hierba versátil y nutritiva para adornar platos y ensaladas.",
    price: 2.49,
    stock: 65,
    image:
      "https://images.pexels.com/photos/4198112/pexels-photo-4198112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Hierbas",
  },
];

const eachProduct = products.map((el) => [
  el.name,
  el.description,
  el.price,
  el.stock,
  el.image,
  el.category,
]);

connection.query(insertQuery, [eachProduct], (err, results) => {
  if (err) {
    console.error("Error al insertar productos: " + err);
    return;
  }
  console.log("Productos insertados!");
});
