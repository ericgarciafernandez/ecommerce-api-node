const connection = require("../db");

// ----- Crear registros -----
const insertQuery =
  "INSERT INTO products (name, description, price , image, category) VALUES ?";

const products = [
  // Productos de la categoría "Interior"
  {
    name: "Cactus 20 cm en maceta decorativa blanca",
    description: "Descubre la elegancia natural con nuestro cactus de 20 cm en una sofisticada maceta decorativa blanca. Ideal para embellecer cualquier espacio con un toque de frescura y modernidad. ¡Añade un toque de vida a tu hogar u oficina hoy mismo!",
    price: 9.99,
    image: "https://img.freepik.com/foto-gratis/detalle-tiro-planta-verde-cactus-pote-sobre-fondo-blanco_23-2148053458.jpg",
    category: "Interior",
  },
  {
    name: "Suculenta 22 cm en maceta decorativa blanca",
    description: "Añade un toque de verdor eterno con nuestra suculenta artificial de 22 cm en una elegante maceta decorativa blanca. Perfecta para aquellos que buscan estilo sin el mantenimiento. ¡Embellece tu hogar u oficina con esta pieza de decoración atemporal!",
    price: 12.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_04714dfe-ce80-4f81-b513-1ef60af0e42d.png?pad_color=fff&v=1713973126&width=720",
    category: "Interior",
  },
  {
    name: "Palmera Dama 150 cm",
    description: "Transforma tu espacio con la majestuosidad de nuestra Palmera Artificial Dama de 150 cm.Con un diseño realista, aporta un ambiente tropical y sofisticado sin necesidad de cuidados. ¡Dale un toque exótico y elegante a tu hogar u oficina hoy mismo!",
    price: 29.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_ebba6cc5-8e80-4609-87fa-da72399756d4.jpg?pad_color=fff&v=1713973495&width=533",
    category: "Interior",
  },
  {
    name: "Ficus Tropical 12 cm",
    description: "Añade un toque de naturaleza con nuestro Ficus Artificial Tropical de 12 cm. Compacto y realista, es perfecto para decorar cualquier rincón con frescura y estilo. ¡Ideal para dar vida a tu hogar u oficina sin complicaciones!",
    price: 39.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_f57116e8-1753-415e-bb6d-843c5397a157.png?pad_color=fff&v=1713973176&width=720",
    category: "Interior",
  },
  {
    name: "Planta Bonsai Juniper 30 cm",
    description: "Embellece tu espacio con la serenidad de nuestro Bonsai Juniper Artificial de 30 cm. Con un diseño elegante y detallado, aporta un toque zen y sofisticado sin necesidad de mantenimiento. ¡Perfecto para crear un ambiente relajante en tu hogar u oficina!",
    price: 7.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_672acdd5-63cc-4a48-b051-1d2770cebc76.png?pad_color=fff&v=1713973071&width=720",
    category: "Interior",
  },
  // Productos de la categoría "Exterior
  {
    name: "Rosa 56 cm rosa claro",
    description: "Disfruta de la belleza eterna con nuestra Rosa Artificial Real Touch de 56 cm en un delicado tono rosa claro.Su aspecto y tacto realista la hacen perfecta para añadir un toque romántico y elegante a cualquier ambiente. ¡Ideal para embellecer tu hogar u oficina sin necesidad de cuidados!",
    price: 14.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_171f4b9f-e7c5-493c-a505-5ad8e23fa8f2.png?pad_color=fff&v=1714178566&width=720",
    category: "Exterior",
  },
  {
    name: "Olivo 200 cm",
    description: "Transforma tu espacio con la elegancia de nuestro Olivo Artificial de 200 cm. Con un diseño realista y majestuoso, aporta un toque mediterráneo y sofisticado sin requerir mantenimiento. ¡Perfecto para crear un ambiente distinguido en tu hogar u oficina!",
    price: 19.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_99f9c49a-4af3-4a51-bb17-588c990c7df5.png?pad_color=fff&v=1713973204&width=720",
    category: "Exterior",
  },
  {
    name: "Planta colgante Jazmín 63 cm",
    description: "Añade un toque de encanto con nuestra Planta Artificial Colgante Jazmín de 63 cm. Su diseño realista y elegante es perfecto para embellecer cualquier espacio con una cascada de verdor sin necesidad de cuidados. ¡Ideal para dar vida y frescura a tu hogar u oficina!",
    price: 17.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_50dcf187-8aa6-43f4-9cf2-bb1fccefd96b.png?pad_color=fff&v=1713973048&width=720",
    category: "Exterior",
  },
  {
    name: "Planta Lavanda 44 cm",
    description: "Disfruta de la frescura y el encanto de nuestra Planta Artificial de Lavanda de 44 cm. Con su vibrante color y detalle realista, añade un toque de naturaleza a tu hogar u oficina sin preocupaciones de mantenimiento. ¡Embellece cualquier espacio con su aroma y belleza duradera!",
    price: 11.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_e4015d93-b681-43ab-8fe7-7984dfa1bbd7.png?pad_color=fff&v=1715651358&width=720",
    category: "Exterior",
  },
  {
    name: "Planta Bonsai Ficus 40 cm",
    description: "Embellece tu hogar u oficina con la serenidad del Bonsai Ficus Artificial de 40 cm.Su diseño detallado y realista aporta un toque de naturaleza y elegancia a cualquier espacio, sin necesidad de cuidados especiales. ¡Transforma tu ambiente con esta pieza atemporal de decoración!",
    price: 49.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_0b078804-4f30-4672-a125-9592bdcda3d1.png?pad_color=fff&v=1713973066&width=720",
    category: "Exterior",
  },
  // Productos de la categoría "Jardín"
  {
    name: "Ramo de flor Violeta 78 cm rosa",
    description: "Embellece tu espacio con el encanto atemporal de nuestro Ramo de Flores Artificiales Violeta de 78 cm en tono rosa. Con detalles realistas y una elegancia única, añade un toque de frescura y sofisticación a cualquier ambiente. ¡Disfruta de la belleza sin preocupaciones de mantenimiento!",
    price: 24.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_7c19e20c-0c38-458a-ace1-98355640361b.png?pad_color=fff&v=1713973227&width=720",
    category: "Jardín",
  },
  {
    name: "Árbol de Navidad de alta calidad Frydnes 210 cm 350-LED",
    description: "Celebra la temporada con nuestro Árbol de Navidad Artificial de Alta Calidad Frydnes de 210 cm, adornado con 350 luces LED para un brillo festivo. Con su diseño exuberante y realista, crea un ambiente acogedor y lleno de alegría navideña en tu hogar. ¡Disfruta de la magia de la Navidad sin preocuparte por las agujas caídas!",
    price: 59.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_a96ac155-01a4-447e-9c04-3049f933f86a.png?pad_color=fff&v=1713972892&width=720",
    category: "Jardín",
  },
  {
    name: "Ramo de tulipanes Real Touch Amarillo 40cm",
    description: "Agrega un toque de luminosidad a tu espacio con nuestro Ramo de Tulipanes Artificiales Real Touch en un cautivador tono amarillo. Con una altura de 40 cm y una apariencia increíblemente realista al tacto, este ramo es perfecto para infundir alegría y frescura en cualquier ambiente. ¡Disfruta de la belleza eterna de los tulipanes sin preocupaciones de cuidado!",
    price: 19.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_f46920b7-eaa6-47e9-b19d-35d3c2d24313.png?pad_color=fff&v=1714091943&width=720",
    category: "Jardín",
  },
  {
    name: "Arbusto Pothos Deluxe 90cm",
    description: "Dale vida a tu entorno con nuestro Arbusto Artificial Pothos Deluxe de 90 cm.Con su exuberante follaje y detalle realista, añade un toque de frescura y elegancia a cualquier espacio sin la necesidad de mantenimiento. ¡Disfruta de la belleza eterna de la naturaleza en tu hogar u oficina!",
    price: 34.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_225a00b1-0f16-447e-80b7-b5e36a920332.png?pad_color=fff&v=1713973105&width=720",
    category: "Jardín",
  },
  {
    name: "Jardín vertical Boj rojo 50x50 cm UV",
    description: "Transforma cualquier pared en un oasis con nuestro Jardín Vertical Boj Rojo de 50x50 cm con protección UV.Con su diseño realista y duradero, añade un toque de frescura y color a cualquier espacio interior o exterior sin preocupaciones de mantenimiento. ¡Embellece tu entorno con esta hermosa pieza de decoración!",
    price: 6.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_09833537-d3ae-41ed-a4e2-30a004727b57.png?pad_color=fff&v=1713973191&width=720",
    category: "Jardín",
  },
  // Productos de la categoría "Hierbas"
  {
    name: "Seto artificial sobre marco negro Ø100 cm de diámetro",
    description: "Crea un espacio privado y acogedor con nuestro Seto Artificial montado sobre un elegante marco negro de Ø100 cm de diámetro. Con su diseño realista y duradero, añade privacidad y belleza a tu patio, terraza o jardín sin preocuparte por el mantenimiento. ¡Disfruta de la tranquilidad y la estética que brinda este seto artificial!",
    price: 3.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_9edaebad-6e7d-4f28-b973-e26457a18c13.png?pad_color=fff&v=1713972820&width=720",
    category: "Hierbas",
  },
  {
    name: "Hierba artificial Cebolla 70 cm",
    description: "Añade un toque de frescura y naturalidad con nuestra Hierba Artificial Cebolla de 70 cm. Con su aspecto realista y sin necesidad de mantenimiento, es perfecta para embellecer cualquier espacio interior o exterior. ¡Disfruta de la belleza de la naturaleza sin las preocupaciones de cuidado!",
    price: 2.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_a3c72eef-9db4-4d70-81c3-85da486271d0.png?pad_color=fff&v=1713973089&width=720",
    category: "Hierbas",
  },
  {
    name: "Planta Romero 22 cm UV",
    description: "Agrega un toque de frescura a tu hogar o jardín con nuestra Planta Artificial de Romero de 22 cm con protección UV.Con su diseño realista y duradero, disfruta del aspecto vibrante y verde del romero sin preocuparte por la exposición al sol. ¡Embellece tu espacio con este toque de naturaleza sin necesidad de mantenimiento!",
    price: 4.99,
    image:
      "https://easyplants.es/cdn/shop/files/file_8c428e73-813b-4d8a-ae28-c69050c0c172.png?pad_color=fff&v=1713973107&width=720",
    category: "Hierbas",
  },
  {
    name: "Musgo de reno Menta 500 gramos",
    description: "Embellece tus arreglos florales y proyectos de decoración con nuestro Musgo de Reno en tono Menta de 500 gramos. Con su textura suave y color vibrante, añade un toque de frescura y naturalidad a cualquier espacio. Perfecto para crear ambientes acogedores y elegantes. ¡Dale vida a tus creaciones con este musgo de alta calidad!",
    price: 3.49,
    image:
      "https://easyplants.es/cdn/shop/files/file_f3bb9037-3244-4177-ba4d-5d5cdfd17f28.png?pad_color=fff&v=1713973082&width=720",
    category: "Hierbas",
  },
  {
    name: "Flor Hierba Gatera Catnip 75 cm azul",
    description: "Añade un toque de encanto a tu hogar con nuestra Flor Artificial de Hierba Gatera Catnip de 75 cm en un hermoso tono azul. Con su diseño realista y vibrante, esta flor es perfecta para alegrar cualquier espacio sin necesidad de cuidados especiales. ¡Disfruta de la belleza eterna de la naturaleza en tu hogar!",
    price: 2.49,
    image:
      "https://easyplants.es/cdn/shop/files/file_17f56c8d-a1c7-47de-9ead-3fff1841dd8f.png?pad_color=fff&v=1713972982&width=720",
    category: "Hierbas",
  },
];

const eachProduct = products.map((el) => [
  el.name,
  el.description,
  el.price,
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
