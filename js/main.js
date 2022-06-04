const grupos = [
    {
        nivel: "Principiante",
        horario: "Lunes 17hs",
        pago: 2800,
        id: 1,
    },
    {
        nivel: "Intermedio",
        horario: "Miércoles 18hs",
        pago: 3000,
        id: 2,
    },
    {
        nivel: "Avanzado",
        horario: "Viernes 19hs",
        pago: 3200,
        id: 3,
    },
];

const caja = document.getElementById("caja");
const divCarrito = document.getElementById("carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function crearCards (){
    grupos.forEach((element) => {
    caja.innerHTML += `<div class="cajita">
    <p>${element.nivel}</p>
    <p>${element.horario}</p>
    <p>$${element.pago}</p>
    <button id="btn${element.id}">Seleccionar</button>
    </div>`;
    });

    grupos.forEach((grupo) =>{
        document.querySelector(`#btn${grupo.id}`).addEventListener("click", () => {
            enviarAlCarrito(grupo);
        });
    });
}

function enviarAlCarrito(grupo) {
    let existe = carrito.some((element) => element.id === grupo.id);

    !existe ? grupo.cantidad = 1 : grupo.cantidad++

    if(!existe){
        carrito.push(grupo);
    }

    pintarCarrito();
}


function pintarCarrito() {
    divCarrito.innerHTML = "";
    carrito.forEach((element) => {
    divCarrito.innerHTML += `<div class="cajita">
    <p>${element.nivel}</p>
    <p>${element.horario}</p>
    <p>$${element.pago}</p>
    <p>CANTIDAD: ${element.cantidad}</p>
    <button id="borrar${element.id}">Borrar</button>
    </div>`;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    borrarProducto();
}

function borrarProducto() {
    carrito.forEach((grupo) => {
        document.querySelector(`#borrar${grupo.id}`).addEventListener("click", () => {
        carrito = carrito.filter((element) => element.id !== grupo.id);
        pintarCarrito();
        });
    });
}


crearCards();
pintarCarrito();

//Ingresar nombre por el input y que aparezca en el html de la web

const sectionContenedor = document.getElementById("contenedor");

const bienvenida = document.getElementsByClassName ("parrafoIndex") [0]
let ingreso = document.getElementsByTagName("input")

bienvenida.innerText = "Te damos la bienvenida"

const btnEnviar = document.querySelector("#enviar");
btnEnviar.addEventListener("click", ()=>{
    sectionContenedor.innerText = inputNombre.value
    Swal.fire({
        title: '만나서 반갑습니다~!',
        text: '¡Mucho gusto ' + inputNombre.value + "!" ,
        icon: 'success',
        confirmButtonText: 'Continuar',
        timer: 1500
      })
})

const inputNombre= document.querySelector ("#nombre");

inputNombre.setAttribute("type", "text");
