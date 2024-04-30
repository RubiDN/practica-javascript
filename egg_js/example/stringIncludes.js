function stringIncludes(cadenaTextoUno,cadenaTextoDos){
    if(cadenaTextoDos.includes(cadenaTextoUno)){
        return true;
    }
    else {
        return false;
    }

}
console.log(stringIncludes("he","Hello"));
console.log(stringIncludes("he","hello world"));