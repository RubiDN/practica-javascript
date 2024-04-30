function titleFormat (texto){
    if (texto===null){
        return "Imput invalido";
    }
    else{
        const primeraLetra=texto.charAt(0).toUpperCase();
        const restoDeTexto=texto.slice(1).toLowerCase();
        const textoFinal=primeraLetra+restoDeTexto;
        console.log(textoFinal);
        return textoFinal.length;
    };
}

console.log(titleFormat("hello world"));
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLd"));