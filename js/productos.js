// Catálogo de artículos deportivos de JavaSport
const productos = [
    {
        id: 1,
        nombre: "Playera Polo BCG Men's Coaches'",
        description: "Playera polo ligera, ideal para entrenamiento o uso casual.",
        precio: 499.99,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500"
    },
    {
        id: 2,
        nombre: "Tenis Jordan Men's Luka .77",
        description: "Calzado de alto rendimiento para básquetbol con amortiguación premium.",
        precio: 1999.99,
        category: "Calzado",
        img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500"
    },
    {
        id: 3,
        nombre: "Shorts de Golf BCG Men's Essential",
        description: "Shorts cómodos y transpirables con tecnología de secado rápido.",
        precio: 900.98,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500"
    },
    {
        id: 4,
        nombre: "Camisa de Fútbol Braha",
        description: "Camisa de fútbol tamaño oficial.",
        precio: 1050.50,
        category: "Equipo",
        img: "https://images.unsplash.com/photo-1689624291789-7b402a15915a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        nombre: "Gorra de Tenis",
        description: "Gorra de tenis para jugadores.",
        precio: 850.00,
        category: "Equipo",
        img: "https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        nombre: "Gorra Deportiva Transpirable",
        description: "Gorra con paneles de malla y banda absorbente de sudor.",
        precio: 800.00,
        category: "Accesorios",
        img: "https://images.unsplash.com/photo-1663280419473-f650ee0fd0b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        nombre: "Mochila de Gimnasio",
        description: "Mochila amplia con compartimento separado para calzado deportivo.",
        precio: 799.00,
        category: "Accesorios",
        img: "https://images.unsplash.com/photo-1622260614153-03223fb72052?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        nombre: "Ropa deportiva para gimnasio",
        description: "Ropa ideal para hacer ejercicio en gimnasio.",
        precio: 499.99,
        category: "Accesorios",
        img: "https://images.unsplash.com/photo-1595909315417-2edd382a56dc?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 9,
        nombre: "Pants para yoga",
        description: "Pants comodos para tus practicas de yoga.",
        precio: 899.50,
        category: "Equipo",
        img: "https://images.unsplash.com/photo-1724833798548-2b5af67952dd?q=80&w=636&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 10,
        nombre: "Ropa para natación",
        description: "Comoda ropa ideal para nadar en alberca.",
        precio: 1500.00,
        category: "Accesorios",
        img: "https://images.unsplash.com/photo-1600817068654-63afdb743932?q=80&w=587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 11,
        nombre: "Ropa de gimnasio para hombre",
        description: "Ropa holgada para gimnasio de hombre casual.",
        precio: 799.99,
        category: "Accesorios",
        img: "https://images.unsplash.com/photo-1667900334692-0bf6afe68cbf?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        nombre: "Calcetas de Compresión (Par)",
        description: "Mejoran la circulación y reducen la fatiga muscular al correr.",
        precio: 499.50,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1641482847237-e64ca2769a8c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 13,
        nombre: "Sudadera con Capucha",
        description: "Sudadera térmica ideal para calentar antes de la rutina.",
        precio: 999.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1586038693164-cb7ee3fb8e2c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 14,
        nombre: "Pants de Entrenamiento",
        description: "Pantalones ligeros con corte cónico y bolsillos con cierre.",
        precio: 1500.00,
        category: "Ropa",
        img: "https://plus.unsplash.com/premium_photo-1664392013281-96b8f0763c30?q=80&w=586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 15,
        nombre: "Reloj Deportivo Inteligente",
        description: "Monitor de ritmo cardíaco, GPS y contador de pasos integrado.",
        precio: 5000.00,
        category: "Accesorios",
        img: "https://images.unsplash.com/photo-1706718273419-9eaa45b72483?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },



    {
        id: 16,
        nombre: "Conjunto Deportivo Tracksuit Striper",
        description: "Chaqueta de cuello alto y pants jogger con franjas icónicas. Ajuste cómodo y elástico para entrenar al aire libre.",
        precio: 849.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1540254597053-3901b858d40f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 17,
        nombre: "Playera de Compresión Dry-Fit M",
        description: "Playera elástica de secado rápido que optimiza el rendimiento muscular.",
        precio: 350.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1763844072520-e480cb2cec8c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 18,
        nombre: "Leggings Deportivos de Alta Cintura",
        description: "Mallas elásticas con soporte abdominal y tela transpirable premium.",
        precio: 520.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1584863495140-a320b13a11a8?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 19,
        nombre: "Rompevientos Impermeable Trail",
        description: "Chaqueta técnica ultraligera resistente al agua y viento con capucha ajustable.",
        precio: 1250.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1758172071415-b7a24c093055?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 20,
        nombre: "Jersey Futbol Arsenal Adidas",
        description: "Jersey de futbol Arsenal color rojo",
        precio: 799.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1577212017184-80cc0da11082?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 21,
        nombre: "Shorts comodos de algodon",
        description: "Shorts externos ligeros.",
        precio: 429.50,
        category: "Ropa",
        img: "https://plus.unsplash.com/premium_photo-1724859700425-c934c81ad561?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 22,
        nombre: "Playera Tank Top Gym-Ready",
        description: "Playera sin mangas con corte olímpico, máxima frescura para entrenar.",
        precio: 280.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1693214099434-18398a882fbc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 23,
        nombre: "Sudadera Hoodie Yellow Skull & Rose",
        description: "Sudadera urbana color amarillo vibrante con gorro y estampado gráfico de calavera en la espalda. Tela de algodón suave, ideal para un estilo urbano y cómodo.",
        precio: 799.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1609873814058-a8928924184a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 24,
        nombre: "Top Deportivo de Alto Impacto",
        description: "Soporte máximo para running y entrenamientos funcionales intensos.",
        precio: 499.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1711188053992-5c18a61dca97?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 25,
        nombre: "Pants Jogger de Entrenamiento",
        description: "Pantalón deportivo con puños ajustados y bolsillos laterales con cierre.",
        precio: 650.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1618355281911-84e6ec751d84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFudHMlMjBKb2dnZXIlMjBkZSUyMEVudHJlbmFtaWVudG98ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 26,
        nombre: "Chaleco Deportivo Acolchado",
        description: "Chaleco ligero repelente al agua, ideal para mantener el torso cálido al aire libre.",
        precio: 899.00,
        category: "Ropa",
        img: "https://images.unsplash.com/photo-1725705142909-c529077591be?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];
