/*const numero1= Number(prompt("Ingresa primer numero"));
const numero2= Number (prompt("Ingresa segundo numero"));
const suma=numero1+numero2;
const mensajeSuma="El resultado de la suma es "+suma;
alert(mensajeSuma);

const promedio=suma/2;
const triple=promedio*3;
const resultadoMenosDiez=triple-10;
const mensajeFinal= "Tu resultado es "+ resultadoMenosDiez;
alert(mensajeFinal);*/

/*Ejercicio sesion 2*/
const cantidad=Number(prompt("¿Cuántos números desea sumar?"));

let sumatoria=0;
let index=1


for (index=1;index<=cantidad;index++){
    const numerosAsumar=Number(prompt("Numero a sumar"));
    sumatoria=sumatoria+numerosAsumar;
}
alert("RESULTADO: "+sumatoria);