function lengthOf(palabra) {
  if (palabra === undefined) {
    return "Invalid input";}
    {return palabra.length; // Se cambió return(palabra.length) por return nombre.length para devolver la longitud del nombre correctamente
  }
}

console.log(lengthOf("hello"));
console.log(lengthOf("bienvenido"));
console.log(lengthOf());

