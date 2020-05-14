//EJERCICIO #09:  Escribe una función, posibleStrings(st), que reciba el string st y de como salida todos las posibles strings que se pueden formar con estos caracteres sin repetirse.
let string = "cat";

function posibleString(st) {
  let result = [];
  let caracteresUsados = [];

  function combinaciones(text) {
    let caracter;
    let caracteres = text.split("");

    for (let i = 0; i < caracteres.length; i++) {
      caracter = caracteres.splice(i, 1);
      caracteresUsados.push(caracter);

      if (caracteres.length == 0) {
        result[result.length] = caracteresUsados.join("");
      }

      combinaciones(caracteres.join(""));
      caracteres.splice(i, 0, caracter);
      caracteresUsados.pop();
    }

    return result;
  }

  function borrarRepetidos(arr) {
    return [...new Set(arr)];
  }

  return borrarRepetidos(combinaciones(st));
}

document.write(
  "Las posibles combinaciones de: ",
  string,
  "</br>Son: ",
  posibleString(string)
);
console.log("Las posibles combinaciones de: ", string);
console.log("Son: ", posibleString(string));
