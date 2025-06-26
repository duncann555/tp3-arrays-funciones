/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function tablaMultiplicar(numero) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    return resultado;
}
const numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));
if (!isNaN(numero)) {
    const tabla = tablaMultiplicar(numero);
    document.writeln(`<h3>Tabla de multiplicar del ${numero}:</h3>`);
    document.writeln(`<p>${tabla}</p>`);
}