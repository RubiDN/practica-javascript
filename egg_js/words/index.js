const frase=prompt("Ingrese una palabra o frase");

const cantidad= frase.length;
console.log("Cantidad "+cantidad);

const fraseMinusculas=frase.toLowerCase();
const fraseMayusculas= frase.toUpperCase();

const minMay= "Resultado "+ fraseMinusculas + fraseMayusculas;
console.log(minMay);

