
/* El simulador formará parte de la web de una institución del idioma coreano. Tiene como ojbetivo informar de manera sencilla a que grupo pertenecerá el inscripto, según su nivel*/

/* class opcion {
    constructor(nivel,dia,horario) {
    this.nivel = nivel;
    this.dia = dia;
    this.horario = horario;
}
}

const opcion1 = new opcion ("Principiante" , "Lunes" , "17hs")
const opcion2 = new opcion ("Intermedio" , "Miercoles" , "18hs")
const opcion3 = new opcion ("Avanzado" , "Viernes" , "19hs")

const cursos = [opcion1,opcion2,opcion3];

console.log(cursos[1].nombre);

let horarioPregunta = ""
let solicitud = parseInt (prompt("Indique su nivel de coreano: \n\t 1 - Principiante \n\t 2 - Intermedio \n\t 3 - Avanzado \n\t ESC para salir " ))

if (solicitud === 1 || solicitud === 2 || solicitud ===3) {
    switch (solicitud) {
        case 1:
            alert("Ha seleccionado el nivel " + opcion1.nivel + " que se cursa el día " + opcion1.dia);
            console.log(opcion1);
            horarioPregunta = prompt ("¿Quiere saber el horario de su cursado? (SI o NO)")
            if (horarioPregunta.toLowerCase() ===  "si") {
                alert ("El horario es a las " + opcion1.horario)
            } else {}
            break;
            
        case 2:
            alert("Ha seleccionado el nivel " + opcion2.nivel + " que se cursa el día " + opcion2.dia);
            console.log(opcion2);
            horarioPregunta = prompt ("¿Quiere saber el horario de su cursado? (SI o NO)")
            if (horarioPregunta.toLowerCase() ===  "si") {
                alert ("El horario es a las " + opcion2.horario)
            } else {}
            break;
               
        case 3:
            alert("Ha seleccionado el nivel " + opcion3.nivel + " que se cursa el dia " + opcion3.dia);
            console.log(opcion3);
            horarioPregunta = prompt ("¿Quiere saber el horario de su cursado? (SI o NO)")
            if (horarioPregunta.toLowerCase() ===  "si") {
                alert ("El horario es a las " + opcion3.horario)
            } else {} 
             break;            
    
        default: 
            break;
 }
}
    let grupo = prompt ("Ingrese día y hora de su grupo")
    
    while (grupo != "CONTINUAR") {    
        console.log("Se ha guardado un lugar para usted en el grupo " + grupo );
        grupo = prompt ("Si realizó todo correctamente Escriba CONTINUAR, sino repita sus datos")  
    }

    if (solicitud === 1 || solicitud === 2 || solicitud ===3) {
        switch (solicitud) {
            case 1:
                alert("Su lugar fue guardado para el grupo de los días "+ opcion1.dia +" en el horario de las " + opcion1.horario + ", ¡Un gusto que te nos unas!");
                break;
                
            case 2:
                alert("Su lugar fue guardado para el grupo de los días "+ opcion2.dia +" en el horario de las " + opcion2.horario + ", ¡Un gusto que te nos unas!");
                break;
                   
            case 3:
                alert("Su lugar fue guardado para el grupo de los días "+ opcion3.dia +" en el horario de las " + opcion3.horario + ", ¡Un gusto que te nos unas!");
                 break;            
        
            default: 
                break;
     }

} else if (solicitud <1 || solicitud >3 ){
    alert("La opcion ingresada no es valida, intente más tarde")
}
else {
    alert ("¡Te esperamos!")
}*/

const sectionContenedor = document.getElementById("contenedor");

const bienvenida = document.getElementsByClassName ("parrafoIndex") [0]
let ingreso = document.getElementsByTagName("input")

bienvenida.innerText = "Te damos la bienvenida " + ingreso

const inputNombre= document.querySelector ("#nombre")

inputNombre.addEventListener("click", ()=>{
    sectionContenedor.innerText = inputNombre.value
})

inputNombre.setAttribute("type")