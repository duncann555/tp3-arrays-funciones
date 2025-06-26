/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica 
si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

function esParOImpar(numero) {
  if (isNaN(numero)) {
    return "El valor ingresado no es un número válido.";
  } else {
    if (numero % 2 === 0) {
      return "El valor ingresado es un número PAR.";
    } else {
      return "El valor ingresado es un número IMPAR.";
    }
  }
}

const numero = parseInt(prompt("Ingrese un número entero:"));
const resultado = esParOImpar(numero);
document.writeln(`<p>${resultado}</p>`);
