/*
Esto se usa para poder importar en el head,
ya que permite esperar a que cargue la pagina antes de los JS
window.onload = function () {
    //Aqui van las funciones que se designan
}
*/
function mostrarMensaje(){
    document.getElementById('caja2').style.display = "block";
}

function ocultarMensaje() { 
    document.getElementById('caja2').style.display = "none"; 
}

function cambiarFondo() { 
    document.getElementById("contenido").style.backgroundColor = "blue"; 
} 
function cambiarTexto() { 
    document.getElementById("texto").innerHTML = "It’s finger-lickin’ good. Why’s he gotta kick the door? Oh... candy, leftovers, Eggo's... she really likes Eggo's. You're an idiot, Steve Harrington. You're beautiful, Nancy Wheeler. Just wait till we tell Will that Jennifer Hayes was crying at his funeral."; 
}

function volver(){ 
    document.getElementById("contenido").style.backgroundColor = "coral";
}

document.getElementById("caja1").addEventListener("mouseover", mostrarMensaje);
document.getElementById("caja1").addEventListener("mouseleave", ocultarMensaje);
document.getElementById("boton1").addEventListener("click", cambiarFondo);
document.getElementById("boton1").addEventListener("dblclick", volver);
document.getElementById("boton2").addEventListener("click", cambiarTexto);