// Ejercicio 7: Comprobación de Número Par
// Declara una función llamada "esPar" que acepte un parámetro "numero" y retorne verdadero si el número es par, de lo contrario falso

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "esPar"
function esPar(numero) {
  // El operador de módulo (%) da el residuo de una división.
  // Si el residuo de dividir entre 2 es 0, es par.
  return numero % 2 === 0;
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    esPar
};
