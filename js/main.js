const producto = (a,b) => a * b
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
while (salida != "salir");

