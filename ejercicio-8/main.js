//EJERCICIO #08:  Escribe una función, uniqueNumber(data), que reciba una arreglo de números enteros y determine si todos los números en el arreglo son distintos uno del otro.
let arr = [1, 8, 7, 3, 9, 5, 2];

function uniqueNumber(data) {
  let result = true;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i] === data[j] && i !== j) {
        result = false;
      }
    }
  }

  return result;
}

document.write("Arreglo: ", arr, "</br>")
console.log("Arreglo: ", arr)

if (uniqueNumber(arr)) {
  document.write("El arreglo no tiene números repetidos");
  console.log("El arreglo no tiene números repetidos");
} else {
  document.write("El arreglo tiene números repetidos");
  console.log("El arreglo tiene números repetidos");
}
