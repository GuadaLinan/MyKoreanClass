// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let total = document.querySelector('#total');
let articulosCarrito = [];

class Producto {
    constructor(id, imagen, titulo, precio) {
        this.id = id;
        this.imagen = imagen;
        this.titulo = titulo;
        this.precio = precio;
        this.cantidad = 1;
        this.subtotal = 0;
    }
}

// Agregar y eliminar productos, también mostrar los de local storage
cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarProducto);

    carrito.addEventListener('click', eliminarProducto);

    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

// Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {

        articulosCarrito = [];
        localStorage.removeItem('carrito');
        limpiarHTML();
        console.clear();
        console.log(articulosCarrito);
    });
}

// Funciones
function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSelecionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSelecionado);
    }
}

// Eliminar un producto del carrito
function eliminarProducto(e) {
    if (e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
        console.clear();
        console.log(articulosCarrito); 
        carritoHTML();
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la información del producto
function leerDatosProducto(producto) {

    const id = producto.querySelector('a').getAttribute('data-id');
    const imagen = producto.querySelector('img').src;
    const titulo = producto.querySelector('h4').textContent;
    const precio = producto.querySelector('.precio span').textContent;

// Crear un nuevo producto
    const infoProducto = new Producto(id, imagen, titulo, precio);

    infoProducto.subtotal = Number(infoProducto.precio.replace('$', '')) * infoProducto.cantidad;

// Revisar si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if (existe) {

        const productos = articulosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
                producto.subtotal = Number(producto.precio.replace('$', '')) * producto.cantidad;
                return producto;
            } else {
                return producto;
            }
        });

        articulosCarrito = [...productos];

    } else {
        articulosCarrito = [...articulosCarrito, infoProducto];
    }

    console.log(articulosCarrito);

    carritoHTML();
}

// Mostrar el Carrito de compras en el HTML
function carritoHTML() {

    limpiarHTML();

    articulosCarrito.forEach(producto => {
        const { imagen, titulo, precio, cantidad, subtotal, id } = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>$${subtotal}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${id}"> X </a>
            </td>
        `;

        contenedorCarrito.appendChild(row);
    });

// Agregar el carrito de compras al storage
    sincronizarStorage();

}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Eliminar los productos del tbody
function limpiarHTML() {

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

    total.innerHTML = `Total : $${totalGeneral()}`;
}

function totalGeneral() {
    let productoTotal = articulosCarrito.reduce((total, producto) => total + producto.subtotal, 0);
    console.log(`Total : $${productoTotal}`);

    return productoTotal;
}