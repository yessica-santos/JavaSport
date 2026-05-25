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
        description: "Balón de fútbol tamaño oficial con cubierta texturizada para mejor control.",
        precio: 1050.50,
        category: "Equipo",
        img: "https://images.unsplash.com/photo-1689624291789-7b402a15915a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        nombre: "Raqueta de Tenis Avanzada",
        description: "Raqueta ligera de fibra de carbono para mayor potencia en el saque.",
        precio: 85.00,
        category: "Equipo",
        img: "https://placehold.co/500x500/212529/ffffff?text=Raqueta+de+Tenis"
    },
    {
        id: 6,
        nombre: "Gorra Deportiva Transpirable",
        description: "Gorra con paneles de malla y banda absorbente de sudor.",
        precio: 15.00,
        category: "Accesorios",
        img: "https://placehold.co/500x500/212529/ffffff?text=Gorra+Deportiva"
    },
    {
        id: 7,
        nombre: "Mochila de Gimnasio",
        description: "Mochila amplia con compartimento separado para calzado deportivo.",
        precio: 35.00,
        category: "Accesorios",
        img: "https://placehold.co/500x500/212529/ffffff?text=Mochila+Gym"
    },
    {
        id: 8,
        nombre: "Termo de Acero Inoxidable 1L",
        description: "Mantiene el agua fría por 24 horas. Ideal para entrenamientos largos.",
        precio: 18.99,
        category: "Accesorios",
        img: "https://placehold.co/500x500/212529/ffffff?text=Termo+Deportivo"
    },
    {
        id: 9,
        nombre: "Tapete de Yoga Antideslizante",
        description: "Tapete de 6mm de grosor para máxima comodidad en tus posturas.",
        precio: 22.50,
        category: "Equipo",
        img: "https://placehold.co/500x500/212529/ffffff?text=Tapete+Yoga"
    },
    {
        id: 10,
        nombre: "Lentes de Natación Anti-vaho",
        description: "Goggles con protección UV y sello de silicona a prueba de filtraciones.",
        precio: 14.00,
        category: "Accesorios",
        img: "https://placehold.co/500x500/212529/ffffff?text=Lentes+Natacion"
    },
    {
        id: 11,
        nombre: "Guantes de Levantamiento de Pesas",
        description: "Guantes con soporte para muñeca y palmas acolchadas.",
        precio: 19.99,
        category: "Accesorios",
        img: "https://placehold.co/500x500/212529/ffffff?text=Guantes+Pesas"
    },
    {
        id: 12,
        nombre: "Calcetas de Compresión (Par)",
        description: "Mejoran la circulación y reducen la fatiga muscular al correr.",
        precio: 10.50,
        category: "Ropa",
        img: "https://placehold.co/500x500/212529/ffffff?text=Calcetas+Compresion"
    },
    {
        id: 13,
        nombre: "Sudadera con Capucha",
        description: "Sudadera térmica ideal para calentar antes de la rutina.",
        precio: 45.00,
        category: "Ropa",
        img: "https://placehold.co/500x500/212529/ffffff?text=Sudadera+Capucha"
    },
    {
        id: 14,
        nombre: "Pants de Entrenamiento",
        description: "Pantalones ligeros con corte cónico y bolsillos con cierre.",
        precio: 38.00,
        category: "Ropa",
        img: "https://placehold.co/500x500/212529/ffffff?text=Pants+Entrenamiento"
    },
    {
        id: 15,
        nombre: "Reloj Deportivo Inteligente",
        description: "Monitor de ritmo cardíaco, GPS y contador de pasos integrado.",
        precio: 150.00,
        category: "Accesorios",
        img: "https://placehold.co/500x500/212529/ffffff?text=Reloj+Inteligente"
    },
    {
        id: 16,
        nombre: "Balón de Básquetbol Oficial",
        description: "Superficie de piel sintética para excelente agarre en canchas interiores y exteriores.",
        precio: 30.00,
        category: "Equipo",
        img: "https://placehold.co/500x500/212529/ffffff?text=Balon+Basquetbol"
    },
    {
        id: 17,
        nombre: "Cuerda para Saltar de Velocidad",
        description: "Cuerda ajustable con cable de acero y mangos ergonómicos.",
        precio: 8.99,
        category: "Equipo",
        img: "https://placehold.co/500x500/212529/ffffff?text=Cuerda+Saltar"
    },
    {
        id: 18,
        nombre: "Rodilleras de Voleibol",
        description: "Protección de alto impacto con espuma de alta densidad.",
        precio: 16.50,
        category: "Accesorios",
        img: "https://placehold.co/500x500/212529/ffffff?text=Rodilleras+Voleibol"
    },
    {
        id: 19,
        nombre: "Tenis para Correr Asfalto",
        description: "Calzado ultraligero con suela reactiva para largas distancias.",
        precio: 89.99,
        category: "Calzado",
        img: "https://placehold.co/500x500/212529/ffffff?text=Tenis+Running"
    },
    {
        id: 20,
        nombre: "Tacos de Fútbol Pista",
        description: "Diseñados para césped sintético y tracción multidireccional.",
        precio: 110.00,
        category: "Calzado",
        img: "https://placehold.co/500x500/212529/ffffff?text=Tacos+Futbol"
    },
    {
        id: 21,
        nombre: "Pesa Rusa 10kg",
        description: "Kettlebell de hierro fundido con recubrimiento de vinilo.",
        precio: 40.00,
        category: "Equipo",
        img: "https://placehold.co/500x500/212529/ffffff?text=Pesa+Rusa+10kg"
    },
    {
        id: 22,
        nombre: "Banda Elástica de Resistencia",
        description: "Banda de resistencia media para fortalecimiento y rehabilitación.",
        precio: 12.00,
        category: "Equipo",
        img: "https://placehold.co/500x500/212529/ffffff?text=Banda+Resistencia"
    },
    {
        id: 23,
        nombre: "Casco de Ciclismo Aerodinámico",
        description: "Casco ligero con excelente ventilación y ajuste milimétrico.",
        precio: 55.00,
        category: "Accesorios",
        img: "https://placehold.co/500x500/212529/ffffff?text=Casco+Ciclismo"
    },
    {
        id: 24,
        nombre: "Top Deportivo de Alto Impacto",
        description: "Soporte máximo para running y entrenamientos intensos.",
        precio: 24.99,
        category: "Ropa",
        img: "https://placehold.co/500x500/212529/ffffff?text=Top+Deportivo"
    },
    {
        id: 25,
        nombre: "Chamarra Rompevientos",
        description: "Chamarra ultraligera, repelente al agua y fácil de empacar.",
        precio: 60.00,
        category: "Ropa",
        img: "https://placehold.co/500x500/212529/ffffff?text=Chamarra+Rompevientos"
    },
    {
        id: 26,
        nombre: "Maleta Deportiva Duffle",
        description: "Bolsa de lona resistente con correa ajustable para el hombro.",
        precio: 42.00,
        category: "Accesorios",
        img: "https://placehold.co/500x500/212529/ffffff?text=Maleta+Deportiva"
    }
];
