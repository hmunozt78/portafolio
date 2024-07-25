let tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

function habilitaAgregar(){
    document.getElementById("formulario").style.display = "inline";
}

function deshabilitaAgregar(){
    document.getElementById("formulario").style.display = "none";
}


window.onload = function () {
    habilitaAgregar();
    deshabilitaAgregar();

   
    document.getElementById("agregarbtn").addEventListener("click", habilitaAgregar);
    document.getElementById("agregarbtn").addEventListener("dblclick", deshabilitaAgregar);
}
