function mostrarMensaje() {
    document.getElementById('text2').style.display = "block";
}

function ocultarMensaje() {
    document.getElementById('text2').style.display = "none";
}

function cambiar_Imagen() {

    let imagen = document.getElementById("img");
    imagen.setAttribute("src", "./assets/img/m2s9Intermedio/goku_ultra_instinct.jpg");
    imagen.setAttribute("width", "80%");
}

function imagenOriginal() {
    let imagen = document.getElementById("img");
    imagen.setAttribute("src", "./assets/img/m2s9Intermedio/goku1_400x400.png");
    imagen.setAttribute("width", "20%");
}

function textoAumentado() {

    document.getElementById("textoFinal").style.fontSize="200%";

}

function textoOriginal() {
    document.getElementById("textoFinal").style.fontSize="100%";
   

}

window.onload = function () {

    mostrarMensaje();
    ocultarMensaje();
    cambiar_Imagen();
    imagenOriginal();
    textoAumentado();
    textoOriginal();
    document.getElementById("text1").addEventListener("mouseover", mostrarMensaje);
    document.getElementById("text1").addEventListener("mouseleave", ocultarMensaje);
    document.getElementById("img").addEventListener("dblclick", cambiar_Imagen);
    document.getElementById("img").addEventListener("mouseleave", imagenOriginal);
    document.getElementById("textoFinal").addEventListener("click", textoAumentado);
    document.getElementById("textoFinal").addEventListener("dblclick", textoOriginal);
}
