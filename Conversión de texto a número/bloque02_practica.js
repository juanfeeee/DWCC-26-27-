const NOMBRE_ALUMNO = "Juan Felipe"; 

let edad = 21; 
// Mostrar por consola los datos y sus tipos con typeof
console.log("Nombre:", NOMBRE_ALUMNO, "Tipo:", typeof NOMBRE_ALUMNO);
console.log("Edad:", edad, "Tipo:", typeof edad);
// Crear variable de texto con la nota
let notaTexto = "7.5"; 

let notaNumero = Number(notaTexto); 

console.log("Nota + 1:", notaNumero + 1); 
//  Provocar un caso de NaN controlado e inspeccionarlo
let casoNaN = Number("hola"); 
console.log("¿Es NaN?:", Number.isNaN(casoNaN)); 