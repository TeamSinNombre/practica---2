//EJERCICIO #01: Escribir una función, isMultiple(n, m), esta debe tomar dos números enteros y retornar true si n es un multiplico de m, que es, n == m*x para un entero x, y falso de otra manera.
let n = parseInt(prompt("Ingrese el valor de n"));
let m = parseInt(prompt("Ingrese el valor de m"));

function isMultiple(m, n) {
  let x = Math.floor(n / m);
  if (n === m * x || n <= x ** m) {
    return true;
  } else {
    return false;
  }
}

if (isMultiple(m, n)) {
  document.write("Si, ", n, " es multiplo de ", m);
  console.log("Si, ", n, " es multiplo de ", m);
} else {
  document.write("No, ", n, " no es multiplo de ", m);
  console.log("No, ", n, " no es multiplo de ", m);
}
