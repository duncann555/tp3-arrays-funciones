/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/

function calculoPerimetro(ladoA, ladoB) {
  return 2 * (ladoA + ladoB);
}

const ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:"));
const ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));

if (!isNaN(ladoA) && !isNaN(ladoB)) {
    const perimetro = calculoPerimetro(ladoA, ladoB); //podria dejarlo asi, o llamar a la funcion directamente desde el document.writeln como hice en el ejercicio 7
    document.writeln(`<p>El perímetro del rectángulo es: ${perimetro}</p>`);
}