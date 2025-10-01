const API_URL = 'http://localhost:3000';

async function cargarProductos() {
    try {
        const response = await fetch(`${API_URL}/productos`);
        if (!response.ok) throw new Error('Error al cargar productos');
        const productos = await response.json();

        const tabla = document.getElementById('productosTabla');
        tabla.innerHTML = '';

        productos.forEach(producto => {
            tabla.innerHTML += `
                <tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>Q${Number(producto.precio).toFixed(2)}</td>
                    <td>${Number(producto.cantidad).toFixed(0)}</td>
                    <td>${producto.tienda}</td>
                    <td>
                        <button onclick="eliminarProducto(${producto.id})" class="btn btn-danger btn-sm">
                            Eliminar
                        </button>
                    </td>
                </tr>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
        //alert('Error al cargar los productos');
    }
}

async function agregarProducto(event) {
    event.preventDefault();

    try {
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const cantidad = document.getElementById('cantidad').value;
        const tienda = document.getElementById('tienda').value;

        const response = await fetch(`${API_URL}/productos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, precio: Number(precio), cantidad: Number(cantidad), tienda }),
        });

        if (!response.ok) throw new Error('Error al agregar producto');

        document.getElementById('productoForm').reset();
        await cargarProductos();
    } catch (error) {
        console.error('Error:', error);
        alert('Error al agregar el producto');
    }
}

async function eliminarProducto(id) {
    if (!confirm('¿Está seguro de eliminar este producto?')) return;

    try {
        const response = await fetch(`${API_URL}/productos/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Error al eliminar producto');
        await cargarProductos();
    } catch (error) {
        console.error('Error:', error);
        alert('Error al eliminar el producto');
    }
}

document.getElementById('productoForm').addEventListener('submit', agregarProducto);
window.addEventListener('load', cargarProductos);
