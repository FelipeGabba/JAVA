let tipoAutomotor = prompt("Ingrese el tipo de automotor a asegurar");

let automotor1 = "Auto"
let automotor2 = "Moto"
let automotor3 = "Camioneta"
let automotor4 = "Camion"

let anioAutomotor = prompt("Ingrese año del automotor a asegurar");

if (anioAutomotor == 2023) {
    alert("El automotor a asegurar es 0Km")
}
else {
    alert("El automotor a asegurar no es 0Km");
}

if (tipoAutomotor == "Auto" || "Camioneta" || "Camion") {
    alert("El " + tipoAutomotor + " es modelo " + anioAutomotor);
} 
else if (tipoAutomotor == "Moto"){
    alert("La " + tipoAutomotor + " es modelo " + anioAutomotor);
}

else { (tipoAutomotor == NaN)
    alert("No hay ningun automotor a asegurar")
}

console.log("Usted quiere asegurar su " + tipoAutomotor + " que es año " + anioAutomotor)

// La aseguradora permite tener hasta 3 automotores bajo un mismo seguro.

let cantidadAutomotres = 0;

switch (cantidadAutomotres) {
    case 0:
        console.log("Usted no tiene automotores a asegurar");
        break;
    case 1:
         console.log("Usted tiene 1 automotor a asegurar");
         break;
    case 2:
        console.log("Usted tiene 2 automotores a asegurar");
        break;
    case 3:
        console.log("Usted tiene 3 automotores a asegurar");
        break;
}

// El valor del seguro va a depender del tipo del automotor.

function valor(automotor1){
    console.log("El valor del seguro de " + automotor1 + " oscila entre los $10.000 y los $50.000 dependiendo del año")
}
valor("Auto");

function valor(automotor2){
    console.log("El valor del seguro de " + automotor2 + " oscila entre los $3.000 y los $10.000 dependiendo del año")
}
valor("Moto");

function valor(automotor3){
    console.log("El valor del seguro de " + automotor3 + " oscila entre los $15.000 y los $70.000 dependiendo del año")
}
valor("Camioneta");

function valor(automotor3){
    console.log("El valor del seguro de " + automotor3 + " oscila entre los $30.000 y los $150.000 dependiendo del año")
}
valor("Camion");
