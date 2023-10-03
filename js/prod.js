// Se procede a crear los usuarios.

const usuario1 = {
    nombre: "Felipe",
    apellido: "Gabba",
    edad: 24,
}

const usuario2 = {
    nombre: "Carla",
    apellido: "Dominguez",
    edad: 26
}

const usuario3 = {
    nombre: "Maria",
    apellido: "Ramirez",
    edad: 32
}

const usuario4 = {
    nombre: "Federico",
    apellido: "Lopez",
    edad: 56
}

// Se declaran los productos de cada usuario.

function Producto(titulo,marca,modelo,color){
    this.titulo = titulo;
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}

const producto1 = new Producto("Camioneta", "VW Volkswagen", " Amarok", 2021, "Azul");

const producto2 = new Producto("Moto", "Honda", "XR", 2019, "Blanco");

const producto3 = new Producto("Auto", "Renault", "Sendero", 2009, "Champagne");

const producto4 = new Producto("Camion", "Iveco", "Trakker", 2012, "Blanco");

// Arrays.

const productos = ["Auto", "Moto", "Camioneta", "Camion"]
console.log(productos)


productos.forEach((producto) => {
    console.log(producto)
});

let productoElegido = prompt("Ingrese el automotor a asegurar");

console.log(producto.find( (producto) => producto.titulo === productoElegido));
