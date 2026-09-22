
let nombre = "Juan Felipe";
let apellidos = "Pina Osorio"; 
let ciclo = "2º de DAW (Desarrollo de Aplicaciones Web)";
let añoNacimiento = 2005;


let anoActual = new Date().getFullYear(); 

let edadAproximada = anoActual - añoNacimiento;

console.log("Hola, me llamo " + nombre + " " + apellidos + ".");
console.log("Estoy estudiando " + ciclo + ".");
console.log("Nací en el año " + añoNacimiento + ", por lo que mi edad aproximada es de " + edadAproximada + " años.");