//EJERCICIO #06: Realizar una función que resuelva el famoso problema de la suma de dos números dentro de un arreglo que coincida con un target dado. El algoritmo debe retornar el índice de estos dos elementos. 
let target = parseInt(prompt("¿Cual es el Target?", 7));
let cantidad = parseInt(prompt("¿De qué tamaño quierres el arreglo?", 6));
let valors = [];
let number = 0;

while (valors.length < cantidad) {
  number = parseFloat(prompt("Ingrese un número"));
  valors.push(number);
}

function twoSum(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i);
        result.push(j);
        i = arr.length;
        j = arr.length;
      }
    }
  }

  return result;
}

document.write(
  "Arreglo: ",
  valors,
  "</br> Target: ",
  target,
  "</br> Resultado: ",
  twoSum(valors, target)
);
