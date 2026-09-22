console.log("1. O ficheiro JavaScript cargou correctamente");

const boton = document.querySelector("#botonCalcular");
const resultado = document.querySelector("#resultado");

console.log("2. Botón atopado:", boton);
console.log("3. Zona de resultado atopada:", resultado);

boton.addEventListener("click", function () {
  console.log("4. Click detectado");

  const prezo = 100;
  const desconto = 20;
  const prezoFinal = prezo - desconto;

  console.log("5. Prezo:", prezo);
  console.log("6. Desconto:", desconto);
  console.log("7. Prezo final calculado:", prezoFinal);

  resultado.textContent = "O prezo final é: " + (prezoFinal) + " €";
  resultado.classList.add("resultado-correcta");
});
