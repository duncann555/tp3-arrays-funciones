/*
3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

const lanzamientos = 50;
const resultados = [];

for (let i = 2; i <= 12; i++) {
  resultados[i] = 0;
}

for (let i = 0; i < lanzamientos; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;

  resultados[suma]++;
}

document.writeln("<h3>Resultados de las sumas en 50 lanzamientos:</h3>");
document.writeln("<ul>");
for (let i = 2; i <= 12; i++) {
  document.writeln(`<li>Suma ${i}: ${resultados[i]} apariciones</li>`);
}
document.writeln("</ul>");
