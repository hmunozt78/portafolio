// Construccion de objeto paso a paso
/*
let auto = new Object();

auto.color = "verde";
auto.nroPuertas = 2;
auto.marca = "datsun";

auto.acelerar = function (){
    console.log("El auto acelero");
}

auto.frenar = function(){
    console.log("El auto Freno");
}

console.log(auto);
*/
// Construccion de Objeto de una sola vez, el mismo anterior

let auto2 = {
    color:"blanco",
    nroPuertas : 2,
    marca : "Renault",

    acelerar: function(){
        console.log("El auto acelero");
    } ,
    frenara:function(){
        console.log("El auto FRENO");
    }
};