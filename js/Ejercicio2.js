/* 
2- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo. 
Cuando el usuario selecciona cancelar:

a. Debe mostrar el arreglo generado.
b. Mostrar la longitud del arreglo.
c. Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
d. Añade en última posición la ciudad de París.
e. Escribe por pantalla el elemento que ocupa la segunda posición.
f. Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
g. Muestra el contenido del arreglo final. // este punto no estaba en el enunciado, pero lo agregué para mostrar el arreglo final
*/

const ciudades = [];
let ciudad;

do {
  ciudad = prompt("Ingrese el nombre de una ciudad (o cancele para terminar):");
  if (ciudad) {
    ciudades.push(ciudad.toUpperCase()); //El UpperCase lo puse solo por estetica
  }
} while (ciudad);

if (ciudades.length !== 0) {
  document.writeln("<h3>A. Arreglo generado:</h3>");
  document.writeln("<ul>");
  for (let i = 0; i < ciudades.length; i++) {
    document.writeln(`<li>${ciudades[i]}</li>`);
  }
  document.writeln("</ul>");

  document.writeln(
    `<h3>B. El arreglo de ciudades tiene : ${ciudades.length} elementos</h3>`
  );

  document.writeln(`<h3>C. Items de la posicion 1,3 y ultima:</h3>`);
  if (ciudades.length > 0) {
    document.writeln(`<p>Posicion 1: ${ciudades[0]}</p>`);
    if (ciudades.length > 2) {
      document.writeln(`<p>Posicion 3: ${ciudades[2]}</p>`);
    } else {
      document.writeln(
        `<p>Posicion 3: No hay ciudad en posicion 3 ingresada.</p>`
      );
    }
    document.writeln(
      `<p>Ultima posicion: ${ciudades[ciudades.length - 1]}</p>`
    );
  }

  ciudades.push("París".toUpperCase());
  document.writeln(
    `<h3>D. Ciudad añadida al final:</h3><p>${
      ciudades[ciudades.length - 1]
    }</p>`
  );

  if (ciudades.length > 1) {
    document.writeln(
      `<h3>E. Ciudad en segunda posición:</h3><p>${ciudades[1]}</p>`
    );
  } else {
    document.writeln(`<h3>E. No hay una segunda ciudad para mostrar</h3>`);
  }

  if (ciudades.length > 1) {
    ciudades[1] = "Barcelona".toUpperCase();
    document.writeln(
      `<h3>F. Ciudad en segunda posición cambiada a:</h3><p>${ciudades[1]}</p>`
    );
  } else {
    document.writeln(
      `<h3>F. No se pudo reemplazar la segunda ciudad porque no existe</h3>`
    );
  }

  document.writeln(`<h3>G. Contenido final del arreglo:</h3>`);
  document.writeln("<ul>");
  for (let i = 0; i < ciudades.length; i++) {
    document.writeln(`<li>${ciudades[i]}</li>`);
  }
  document.writeln("</ul>");
} else {
  document.writeln("<h3>No se ingresaron ciudades.</h3>");
}
