// Renderizado de la interfaz al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-productos');

    // Recorremos el array de productos (que viene de productos.js)
    productos.forEach(prod => {
        const div = document.createElement('div');
        div.classList.add('col-md-6', 'col-lg-3', 'mb-4');
        
        // Uso de Template Literals para inyectar HTML
        div.innerHTML = `
            <div class="card h-100 shadow-sm producto-card">
                <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
                <div class="card-body d-flex flex-column text-center">
                    <h5 class="card-title fw-bold">${prod.nombre}</h5>
                    <p class="card-text text-primary fs-5">$${prod.precio} MXN</p>
                    <button class="btn btn-primary mt-auto w-100 fw-bold" onclick="agregarAlCarrito(${prod.id})">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(div);
    });
});
