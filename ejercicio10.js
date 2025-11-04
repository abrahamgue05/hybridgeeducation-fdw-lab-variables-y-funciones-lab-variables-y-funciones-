// Ejercicio 10: Inversión de una Cadena
// Declara una función llamada "invertirCadena" que acepte un parámetro "cadena" y retorne la cadena invertida

// Ejemplos:
// invertirCadena("Hola Mundo") // debe retornar "odnuM aloH"
// invertirCadena("anita lava la tina") // debe retornar "anit al aval atina"

function invertirCadena(cadena) {
  // El truco clásico de JS:
  // 1. .split('') -> convierte la cadena en un array de letras
  // 2. .reverse() -> invierte el orden del array
  // 3. .join('')  -> une las letras del array en una nueva cadena
  return cadena.split('').reverse().join('');
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    invertirCadena
};
