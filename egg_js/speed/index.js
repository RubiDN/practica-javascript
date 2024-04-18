//Ejercicio 1: Con variables programadas

/*function calcularVelocidad() { 
    const distancia = 10
    const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
    }
    
calcularVelocidad();
calcularVelocidad();
calcularVelocidad();*/


//Ejercicio 2: Pasandole los parametros dentro de la funcion

/*
function calcularVelocidad(distancia, tiempo) {
    //const distancia = 10
    //const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
    }
    
calcularVelocidad(10,2);
calcularVelocidad(50,2);
calcularVelocidad(60,3);*/



const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
        return velocidad
    }
    
const velocidad1 = calcularVelocidad(10,2);
console.log("La velocidad de Juana es " + velocidad1);

const velocidad2 = calcularVelocidad(18,9);
console.log("La velocidad de Maria es " + velocidad1);


const velocidad3 = calcularVelocidad(42,7);
console.log("La velocidad de Andres es " + velocidad1);




