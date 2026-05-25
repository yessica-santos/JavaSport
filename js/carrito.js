// Inicializar el carrito buscando en el LocalStorage
let carrito = JSON.parse(localStorage.getItem('carritoJavaSport')) || [];

// Requisito crítico: Guardar en LocalStorage
function guardarEnLocal() {
    localStorage.setItem('carritoJavaSport', JSON.stringify(carrito));
    actualizarContador();
}

// Función para agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        guardarEnLocal();
        
        // Pequeña animación visual en el botón de carrito
        const btnCarrito = document.getElementById('btn-carrito');
        btnCarrito.classList.add('btn-success');
        btnCarrito.classList.remove('btn-outline-info');
        setTimeout(() => {
            btnCarrito.classList.remove('btn-success');
            btnCarrito.classList.add('btn-outline-info');
        }, 300);
    }
}

// Actualizar la interfaz del contador
function actualizarContador() {
    const contador = document.getElementById('contador-carrito');
    if(contador) {
        contador.innerText = carrito.length;
    }
}

// Inicializar el contador cuando cargue la página
document.addEventListener('DOMContentLoaded', actualizarContador);
