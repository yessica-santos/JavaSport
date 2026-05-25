# 🏃‍♂️ JavaSport - Landing Page 

Proyecto desarrollado para el Hackathon (18 minutos) de la Cohorte 67 de Generation México.

## 👥 Equipo

## 🎯 Misión Cumplida
1. **Diseño atractivo e intuitivo:** Uso de Bootstrap 5 para maquetación ágil y responsiva.
2. **Animaciones:** Efectos `hover` suaves en las tarjetas de productos con CSS (`transform` y `box-shadow`) y feedback visual al agregar al carrito.
3. **Módulos JS:** Código separado en responsables lógicos (Datos, LocalStorage e Interfaz).
4. **Persistencia:** Los datos del carrito se guardan correctamente en `LocalStorage` bajo la llave `carritoJavaSport`.

## ⚙️ Tecnologías Usadas
* HTML5
* CSS3
* Bootstrap 5
* Vanilla JavaScript

## 🚀 Cómo ejecutarlo
Simplemente abre el archivo `index.html` en tu navegador web. No se requiere servidor de desarrollo, pero funciona perfectamente con Live Server en VS Code.

👥 Distribución Estratégica del Equipo (10 Integrantes)
Tener a 10 personas en una Landing Page requiere dividir las responsabilidades quirúrgicamente.

1 Coordinador / Scrum Master: Supervisa el reloj, elimina bloqueos, asegura que los equipos se comuniquen y verifica que se cumpla la rúbrica. No pica código directamente, revisa que todo encaje.

1 Git Master / QA: Crea el repositorio, define las ramas, aprueba los Pull Requests (o uniones) y realiza pruebas de calidad (QA). Será quien suba el link final a Canvas.

3 Desarrolladores UI/UX (Frente de Interfaz):

Dev 1: Navbar, Hero Section y Footer.

Dev 2: Maquetación de la sección "Acerca de nosotros" y "Contacto".

Dev 3: Maquetación de la sección "Servicios" y el layout del contenedor de productos (Grid de Bootstrap).

Enfoque: Diseño minimalista y profesional. Espacios en blanco amplios, tipografía clara y sin saturación visual.

2 Desarrolladores de Datos (Frente de Datos):

Se encargan de construir el catálogo de productos y las funciones base de localStorage.

3 Desarrolladores de Lógica (Frente de Interacción):

Dev 1: Lógica de renderizado dinámico (inyectar el catálogo al HTML).

Dev 2: Funcionalidad de agregar al carrito y animaciones.

Dev 3: Lógica de cálculo total y renderizado del carrito (leer de localStorage y mostrar).

⏱️ Cronograma del Sprint (5 Horas)
Trabajar bajo presión requiere tiempos estrictos.

Hora 1: Planeación y Setup (El Cimiento)

El Git Master crea el repositorio y todos clonan el proyecto con la estructura de carpetas (index.html, style.css, js/...).

Definición rápida de la paleta de colores y clases de Bootstrap a usar.

El equipo de Datos define la estructura exacta de los objetos para que el equipo de Lógica pueda empezar a programar "a ciegas" con datos simulados.

Hora 2: Desarrollo Paralelo (El Motor)

UI/UX: Levantan el esqueleto visual en HTML.

Datos: Terminan el arreglo y dejan listas las funciones de guardar/leer.

Lógica: Programan la manipulación del DOM y eventos de los botones.

Hora 3: Integración Temprana (El Ensamble)

Pausa de desarrollo. El Git Master comienza a unir el HTML con los scripts de JavaScript.

Se verifica que los contenedores vacíos del HTML reciban correctamente las tarjetas generadas por JS.

Hora 4: Persistencia y Corrección (La Rúbrica)

Foco absoluto en conectar el carrito con localStorage.

El Coordinador verifica que al recargar la página, los artículos sigan ahí (Requisito crítico).

Se aplican las animaciones de JavaScript (ej. un fade-in al agregar un producto o una alerta visual).

Hora 5: Pulido, QA y Entrega (El Cierre)

Congelamiento de código (nadie programa nada nuevo).

Pruebas de usuario: ¿Los enlaces funcionan? ¿El diseño es responsivo?

Limpieza de código: Eliminar console.log, comentarios basura y asegurar la correcta indentación.

Subir enlace a Canvas.

💻 Pautas Técnicas y Clean Code
Para mantener un estándar profesional, el equipo de JavaScript debe seguir una regla estricta de nomenclatura: Los nombres de variables, funciones y arreglos deben estar en inglés, pero el contenido de los strings y la interfaz que ve el usuario debe estar en español.

Ejemplo para el módulo de Datos (js/products.js):

JavaScript
const products = [
    {
        id: 1,
        name: "Mancuernas Hexagonales 5kg",
        description: "Ideales para entrenamiento funcional en casa.",
        price: 450.00,
        imageUrl: "assets/img/mancuernas.jpg"
    },
    {
        id: 2,
        name: "Tenis Running Pro",
        description: "Amortiguación máxima para asfalto.",
        price: 1299.00,
        imageUrl: "assets/img/tenis.jpg"
    }
];

// Función con única responsabilidad (Single Responsibility Principle)
function saveToLocalStorage(cartItems) {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
}
Esto facilitará la lectura del código, manteniéndolo limpio y modular.

¿Te gustaría que definamos cómo organizar el flujo de trabajo en GitHub (ramas, commits, merges) para evitar que los 10 integrantes generen conflictos al intentar subir su código al mismo tiempo?
