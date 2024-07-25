let selectorId = document.getElementById("parrafo");
console.log("selectorID: ", selectorId);

let selectorEtiqueta = document.getElementsByTagName("h1");
console.log("selectorEtiqueta: ", selectorEtiqueta);

let selectorClase = document.getElementsByClassName("contenedor");
console.log("selectorClase: ", selectorClase);

let selectorVarios = document.querySelector(".contenedor");
console.log("selectorVarios: ", selectorVarios);

var selectorTodos = document.querySelectorAll(".contenedor");
console.log("selectorTodos: ", selectorTodos);

let selectorId2 = document.getElementById('parrafo').innerHTML;
console.log("sselectorId2: ", selectorId2);

let contenidoHTMLSelectorId = selectorId.innerHTML;
console.log("contenidoHTMLSelectorId: ", contenidoHTMLSelectorId);


//En este ejemplo, se crea un nuevo elemento al final del documento
let creandoElemento = document.createElement("p");
creandoElemento.textContent = "Este nodo fue creado desde JavaScript";
document.body.appendChild(creandoElemento);

let selectorVarios2 = document.querySelector(".contenedor"); 
let creandoElemento2 = document.createElement("p"); 
creandoElemento2.textContent = "Este nodo fue creado desde JavaScript para anexar a un Parrafo"; 
selectorVarios2.append(creandoElemento2);


//En este ejemplo eliminaremos nodos subalternos (hijos)
  let nodoPadre = document.querySelector(".contenedor"); 
  let nodoHijo = document.querySelector("#parrafo"); 
//  nodoPadre.removeChild(nodoHijo);

 let texto = document.getElementsByTagName("h1").innerHTML="Aqui cambie el Titulo";
 
 //let texto2 = document.getElementById("parrafo").innerText="Prueba Cambio texto con getElementById";


 // generar un nuevo enlace
 let nuevoEnlace = document.createElement("A");

 //agrega el href
 nuevoEnlace.href = "http://127.0.0.1:5500/m2s4_clase.html";

 //agrega el texto
 nuevoEnlace.textContent = "Enlace creado por JS";

 //agrega la clase
//  nuevoEnlace.classList.add("contenedor");

//Agrega el contenido en la clase seleccionada 
let navegacion = document.querySelector(".contenedor");
 navegacion.appendChild(nuevoEnlace);

//console.log(nodoPadre);
//console.log(nodoPadre.childNodes);
let nodohijo2 = nodoPadre.childNodes;
console.log("nodohijo2: ",nodohijo2);

let nodoSegundomatrimonio =[];

for (let nodo of nodohijo2) {
  console.log("nodo: ", nodo);
  nodoSegundomatrimonio.push(nodo);
}

for (let nodoCopia of nodoSegundomatrimonio) {
  console.log("nodo: ", nodoCopia);
  nodoPadre.removeChild(nodoCopia);
}




    
// for(let nodo of nodohijo2){
//     console.log("Nodo: ", nodo);
 //    nodoPadre.removeChild(nodo);
 //}
 //console.log("nodohijo2: ",nodohijo2);