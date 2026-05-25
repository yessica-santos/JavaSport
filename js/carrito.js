// Inicializar el carrito buscando en el LocalStorage
let carrito = JSON.parse(localStorage.getItem('carritoJavaSport')) || [];

function guardarEnLocal() {
    localStorage.setItem('carritoJavaSport', JSON.stringify(carrito));
    actualizarContador();
    renderizarCarrito(); // Dibuja la tabla cada vez que algo cambia
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        // ¿El producto ya está en el carrito?
        const existe = carrito.find(p => p.id === id);
        if (existe) {
            existe.cantidad++; // Si ya existe, solo suma 1 a la cantidad
        } else {
            // Si no existe, lo agregamos como nuevo con cantidad inicial de 1
            carrito.push({ ...producto, cantidad: 1 });
        }
        guardarEnLocal();
        
        // Pequeña animación en el botón
        const btnCarrito = document.getElementById('btn-carrito');
        btnCarrito.classList.add('btn-success');
        btnCarrito.classList.remove('btn-outline-info');
        setTimeout(() => {
            btnCarrito.classList.remove('btn-success');
            btnCarrito.classList.add('btn-outline-info');
        }, 300);
    }
}

// NUEVA FUNCIÓN: Restar cantidad
function restarCantidad(id) {
    const producto = carrito.find(p => p.id === id);
    if (producto) {
        producto.cantidad--;
        if (producto.cantidad === 0) {
            eliminarDelCarrito(id); // Si llega a 0, se elimina
        } else {
            guardarEnLocal();
        }
    }
}

// NUEVA FUNCIÓN: Eliminar artículo completo
function eliminarDelCarrito(id) {
    // Sobrescribimos el arreglo con todos los productos MENOS el que queremos borrar
    carrito = carrito.filter(p => p.id !== id);
    guardarEnLocal();
}

// NUEVA FUNCIÓN: Pintar los datos en el Modal
function renderizarCarrito() {
    const contenedor = document.getElementById('cuerpo-carrito');
    const txtTotal = document.getElementById('total-carrito');
    
    // Si no encuentra el modal en el HTML, se detiene para evitar errores
    if (!contenedor) return; 

    contenedor.innerHTML = ''; // Limpiar la tabla antes de reescribirla
    let totalPrecio = 0;

    carrito.forEach(prod => {
        const tr = document.createElement('tr');
        // Usamos template literals para armar la fila de la tabla
        tr.innerHTML = `
            <td><img src="${prod.img}" alt="${prod.nombre}" style="width: 50px; object-fit: contain;"></td>
            <td class="align-middle">${prod.nombre}</td>
            <td class="align-middle">
                <button class="btn btn-sm btn-outline-secondary px-2" onclick="restarCantidad(${prod.id})">-</button>
                <span class="mx-2 fw-bold">${prod.cantidad}</span>
                <button class="btn btn-sm btn-outline-secondary px-2" onclick="agregarAlCarrito(${prod.id})">+</button>
            </td>
            <td class="align-middle">$${(prod.precio * prod.cantidad).toFixed(2)}</td>
            <td class="align-middle">
                <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${prod.id})">🗑️</button>
            </td>
        `;
        contenedor.appendChild(tr);
        totalPrecio += prod.precio * prod.cantidad;
    });

    txtTotal.innerText = totalPrecio.toFixed(2);
}

// Modificamos el contador para que sume las cantidades, no solo los renglones
function actualizarContador() {
    const contador = document.getElementById('contador-carrito');
    if(contador) {
        // Reduce va sumando la propiedad 'cantidad' de todos los objetos en el carrito
        const totalArticulos = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
        contador.innerText = totalArticulos;
    }
}

// Al cargar la página, pinta el número y los artículos si había algo guardado
document.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    renderizarCarrito();
});

// NUEVA FUNCIÓN: Simular el pago exitoso
function procesarPago() {
    // Verificamos que haya productos en el carrito
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. ¡Agrega productos de JavaSport primero!");
        return;
    }

    // Pequeña alerta nativa para celebrar
    alert("¡Pago procesado con éxito! Gracias por tu compra en JavaSport 🏃‍♂️");
    
    // Vaciamos el arreglo del carrito
    carrito = [];
    
    // Guardamos el carrito vacío en el LocalStorage
    guardarEnLocal();
    
    // Cerramos el modal usando la API de Bootstrap
    const modalPago = document.getElementById('modalPago');
    const modalInstance = bootstrap.Modal.getInstance(modalPago);
    modalInstance.hide();
}