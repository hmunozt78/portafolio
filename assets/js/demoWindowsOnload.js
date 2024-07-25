/* Asi se usa windows on load
para poder cargar el JS d en el Head
Se declaran las funciones primero, y despues se hacen
"cargas" en el windows on load
*/

function saludo() {
    console.log("Hola")
}

window.onload = function () {
    saludo();
}