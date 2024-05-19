class Calculator {
  addition(a, b) {
    return a + b;
  }
  subtraction(a, b) {
    return a - b;
  }
  multiplication(a, b) {
    return a * b;
  }
  division(a, b) {
  if(b!==0){
    return a / b;}
  else alert (`El denominador tiene que ser diferente de cero`)
  }
  power(a, b) {
    return Math.pow(a, b);
  }
  square(a) {
    return Math.sqrt(a);
  }
  cube(a) {
    return Math.cbrt(a);
  }
}

function startCalculator() {
  const calculator = new Calculator();
  const operation = prompt(
    "Que operacion deseas realizar?(suma,resta,multiplicacion, division,potencia,raiz cuadrada,raiz cubica)"
  ).toLowerCase();
  if (operation === "suma") {
    const numero1 = parseFloat(prompt("Ingresa el primer numero"));
    const numero2 = parseFloat(prompt("Ingresa el segundo numero"));
    const resultado = calculator.addition(numero1, numero2);
    alert(`El resultado es ${resultado}`);
  } else if (operation === "resta") {
    const numero1 = parseFloat(prompt("Ingresa el primer numero"));
    const numero2 = parseFloat(prompt("Ingresa el segundo numero"));
    const resultado = calculator.subtraction(numero1, numero2);
    alert(`El resultado es ${resultado}`);
  } else if (operation === "multiplicacion") {
    const numero1 = parseFloat(prompt("Ingresa el primer numero"));
    const numero2 = parseFloat(prompt("Ingresa el segundo numero"));
    const resultado = calculator.multiplication(numero1, numero2);
    alert(`El resultado es ${resultado}`);
  } else if (operation === "division") {
    const numero1 = parseFloat(prompt("Ingresa el primer numero"));
    const numero2 = parseFloat(prompt("Ingresa el segundo numero"));
    const resultado = calculator.division(numero1, numero2);
    alert(`El resultado es ${resultado}`);
  } else if (operation === "potencia") {
    const numero1 = parseFloat(prompt("Ingresa el primer numero"));
    const numero2 = parseFloat(prompt("Ingresa el segundo numero"));
    const resultado = calculator.power(numero1, numero2);
    alert(`El resultado es ${resultado}`);
  } else if (operation === "raiz cuadrada") {
    const numero1 = parseFloat(prompt("Ingresa el numero"));
    const resultado = calculator.square(numero1);
    alert(`El resultado es ${resultado}`);
  } else if (operation === "raiz cubica") {
    const numero1 = parseFloat(prompt("Ingresa el numero"));
    const resultado = calculator.cube(numero1);
    alert(`El resultado es ${resultado}`);
  } else {
    alert("Operacion invalida.Porfavor elige una operacion valida");
  }
}

startCalculator();
