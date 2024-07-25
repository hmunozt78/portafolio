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

/* function Auto(color, nroPuertas, marca){
    this.color = color;
    this.nroPuertas=nroPuertas;
    this.marca= marca;

    this.acelerar= function(){
        console.log(`El auto ${this.marca} acelero`);
    };
    this.frenara=function(){
        console.log("El auto FRENO");
    };

}

let miAuto1 = new Auto("Rojo", 4, "Nissan"); 
let miAuto2 = new Auto("Negro", 2, "Suzuki");

console.log("miAuto1", miAuto1);
console.log("miAuto2", miAuto2) */

function Conductor(nombre, tipoLicencia, edad) { 
    this.nombre = nombre; 
    this.tipoLicencia = tipoLicencia; 
    this.edad = edad;
}

function Auto(color, numeroPuertas, marca, conductor) { 
    this.color = color; 
    this.numeroPuertas = numeroPuertas; 
    this.marca = marca; 
    this.conductor = conductor; 
} 

let conductor1 = new Conductor("Luis Ochoa", "B", 28);

let miAuto3 = new Auto("Rojo", 4, "Nissan", conductor1); 
let miAuto4 = new Auto("Negro", 2, "Suzuki", conductor1);

console.log("mi Auto3 ", miAuto3);
console.log("mi Auto4 ", miAuto4);