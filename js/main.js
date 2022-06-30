// Ingresar nombre por el input y que aparezca en el html de la web

// Variables
const sectionContenedor = document.getElementById("contenedor");
const bienvenida = document.getElementsByClassName ("parrafoIndex") [0]
let ingreso = document.getElementsByTagName("input")

bienvenida.innerText = "Te damos la bienvenida"

// Añadir evento
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
