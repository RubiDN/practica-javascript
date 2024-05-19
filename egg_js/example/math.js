function palindrome(x) {
  const num1 = 20,
    num2 = 30,
    num3 = 40,
    num4 = 1.5;
  let matAbs = Math.abs(x);
  console.log(`El numero ${x} tiene como valor absoluto : ${matAbs}`);
  let matCeil = Math.ceil(x);
  console.log(
    `El numero ${x} tiene como valor redondeado hacia arriba : ${matCeil}`
  );
  let matFloor = Math.floor(x);
  console.log(
    `El numero ${x} tiene como valor redondeado hacia abajo : ${matFloor}`
  );
  let matRound = Math.round(x);
  console.log(`El numero ${x} tiene como valor redondeado : ${matRound}`);
  let matMax = Math.max(x, num1, num2, num3, num4);
  console.log(
    `Los numeros ${x},${num1},${num2},${num3}y${num4} tienen como valor maximo : ${matMax}`
  );
  let matMin = Math.min(x, num1, num2, num3, num4);
  console.log(
    `Los numeros ${x},${num1},${num2},${num3}y${num4} tienen como valor minimo : ${matMin}`
  );
  let matRandom = Math.random(x);
  console.log(`El valor aleatorio es: ${matRandom}`);
}

palindrome(7.4);
