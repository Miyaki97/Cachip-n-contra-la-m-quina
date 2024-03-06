let nJuegos = +prompt("Cantidad de juegos");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let puntosUsuario = 0
let puntosPc = 0

for (let i = 0; i < nJuegos; i++) {
    let eleccion = prompt("Piedra, papel o tijera");
    let eleccionNumero;

    
    switch (eleccion) {
        case "piedra":
            eleccionNumero = 0;
            break;
        case "papel":
            eleccionNumero = 1;
            break;
        case "tijera":
            eleccionNumero = 2;
            break;
        default:
            console.log("Elección no válida");
            continue;
    }
    let eleccionPc = getRandomInt(2)

    let resultado;



    if (eleccionNumero === eleccionPc) {
        resultado = "Empate";
    } else if (
        (eleccionNumero === 1 && eleccionPc === 0) ||
        (eleccionNumero === 2 && eleccionPc === 1) ||
        (eleccionNumero === 0 && eleccionPc === 2)
    ) {
        resultado = "Victoria";
       puntosUsuario += 1;
    } else {
        resultado = "Derrota";
        puntosPc +=1;
    }
    alert(resultado)

}

if (puntosUsuario > puntosPc) {
    mensaje = "¡Ganasteee!!";
} else if (puntosUsuario === puntosPc) {
    mensaje = "Empate total";
} else {
    mensaje = "Perdiste contra el PC!! Sigue intentando";
}

alert(mensaje) 
