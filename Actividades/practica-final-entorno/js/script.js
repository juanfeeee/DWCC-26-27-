console.log("Archivo script.js conectado correctamente");

const boton = document.querySelector("#botonComprobar");
const resultado = document.querySelector("#resultado");

console.log("Botón encontrado:", boton);
console.log("Zona de resultado encontrada:", resultado);

boton.addEventListener("click", function () {
  console.log("Botón pulsado");
  console.log("Calculando el nuevo mensaje para la pantalla...");
  let nombre = "Juan";
  resultado.textContent = "¡Hola " + nombre + "! Has modificado el texto con éxito.";
});
