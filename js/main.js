const productos = [
    { nombre: "Amazon Echo Studio", precio: 10000 },
    { nombre: "IPhone 14 Pro Max", precio: 400000 },
    { nombre: "PlayStation 5", precio: 250000 },
    { nombre: "Asus Rog Flow z13", precio: 900000 },
    { nombre: "Termo Stanley 1L", precio: 9500 },
    { nombre: "Asus VivoBook se14 flip", precio: 650000 },
    { nombre: "Iphone 13 Pro", precio: 280000 },
    { nombre: "Tv Samsung NQLed 75", precio: 330000 },
];

let carrito = []

let seleccion = prompt("Hola desea comprar alguno de nuestros productos importados?: \n1 - Si \n2 - No")

while (seleccion != "1" && seleccion != "2") {
    alert("Por favor ingrese una respuesta valida")
    seleccion = prompt("Hola desea comprar alguno de nuestros productos importados?: \n1 - Si \n2 - No")
}

if (seleccion == "1") {
    alert("Esta es la lista de productos disponibles")
    let productosDisponibles = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(productosDisponibles.join(" - "))
} else if (seleccion == "2") {
    alert("Gracias por su visita, vuelva prontos")
}

while (seleccion != "2") {
    let producto = prompt("Ingrese el numero que corresponde al producto que quiere agregar a su carrito: \n1 - Amazon Echo Studio \n2 - IPhone 14 Pro Max \n3 - PlayStation 5 \n4 - Asus Rog Flow z13 \n5 - Termo Stanley 1L \n6 - Asus VivoBook se14 flip \n7 - Iphone 13 Pro \n8 - Tv Samsung NQLed 75 ")
    let precio = 0

    if (producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || producto == "6" || producto == "7" || producto == "8") {
        switch (producto) {
            case "1":
                precio = 10000;
                break;
            case "2":
                precio = 400000;
                break;
            case "3":
                precio = 250000;
                break;
            case "4":
                precio = 900000;
                break;
            case "5":
                precio = 9500;
                break;
            case "6":
                precio = 650000;
                break;
            case "7":
                precio = 280000;
                break;
            case "8":
                precio = 330000;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("Cuantas unidades quiere comprar?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("Producto no disponible")
    }

    seleccion = prompt("Desea seguir comprando?: \n1 - Si \n2 - No")

    while (seleccion === "2") {
        alert("Gracias por la compra, vuelva prontos")
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es: ${total}`)
alert("Gracias por la compra, vuelva prontos")






































/*const producto = (a,b) => a * b
const resta = (a,b) => a - b
const descuentoPorKilo30 = x => x * 0.3
const descuentoPorKilo50 = x => x * 0.5
const descuentoVisa = x => x * 0.1
const descuentoMaster = x => x * 0.05
let cantidadKilos = parseInt(prompt("Ingrese la cantidad de kilos totales de su compra: "));

let precioPorKilo = 500
let precioInicial = cantidadKilos * precioPorKilo
console.log("precioInicial" + precioInicial)

let PrecioPorKilo30 = resta(precioPorKilo, descuentoPorKilo30(precioPorKilo))
console.log("precioPorKilo30" + PrecioPorKilo30)

let PrecioPorKilo50 = resta(precioPorKilo, descuentoPorKilo50(precioPorKilo))
console.log("precioPorKilo50" + PrecioPorKilo50)

let precioParcial = precioInicial

function descuentoPorKilos(){
if(cantidadKilos >= 5 && cantidadKilos < 10){
    precioParcial = cantidadKilos * PrecioPorKilo30	
    console.log("precioParcial" + precioParcial)
}else if(cantidadKilos >= 10 && cantidadKilos < 25){
    precioParcial = cantidadKilos * PrecioPorKilo50
    console.log("precioParcial" + precioParcial)
}else{
    precioParcial = cantidadKilos * precioPorKilo
    console.log("precioParcial" + precioParcial)
}
return precioParcial;
}

descuentoPorKilos();

let tarjeta = prompt("Con que tarjeta desea abonar? Alguna de ellas poseen descuentos adicionales: \n1- Visa 10%\n2- Mastercard 5%\n3- Otra: sin desc.\n4- Digite el nombre de su tarjeta: ");

if(precioParcial != isNaN){
    switch (tarjeta) {
        case "1":
            precioFinal =  resta(precioParcial, descuentoVisa(precioParcial));
            console.log("precioFinal" + precioFinal)
            break;
        case "2":
            precioFinal =  resta(precioParcial, descuentoMaster(precioParcial));
            console.log("precioFinal" + precioFinal)
            break;
        case "3": 
            precioFinal = precioParcial;
            console.log("precioFinal" + precioFinal)
            break;
        default:
            alert("Tarjeta no valida.");
    }    
}

function mensaje(precioFinal) {
    alert("El precio final es de: " + precioFinal);
}

do {    
    if (cantidadKilos != isNaN) {
        if (cantidadKilos > 5 && cantidadKilos < 10) {
            console.log("precioParcial" + precioParcial);
            console.log("precioFinal" + precioFinal);
        }else if(cantidadKilos >= 10 && cantidadKilos < 25){
            console.log("precioParcial" + precioParcial);
            console.log("precioFinal" + precioFinal);
        }else if (cantidadKilos < 5){
            precioFinal = precioParcial
            console.log("precioParcial" + precioParcial)
        }
    }
    
mensaje(precioFinal, cantidadKilos);
    salida = prompt("Si desea realizar otra operacion ingrese 'seguir' \nSi desea salir ingrese 'salir'");
}
while (salida != "salir");*/

