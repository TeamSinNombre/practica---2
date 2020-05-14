//EJERCICIO #07: Dado un número en base Hexadecimal (en formato         string) crea una función, hexToDec(st), donde st es el número base 16, convertir este número a decimal, sin usar funciones pre hechas de librerías como Math.
let hexadecimal = prompt("Ingrese un valor hexadecimal", "FF");

function letterToNumber(letter) {
  if (letter == "A" || letter === "a") {
    return 10;
  } else if (letter === "B" || letter === "b") {
    return 11;
  } else if (letter === "C" || letter === "c") {
    return 12;
  } else if (letter === "D" || letter === "d") {
    return 13;
  } else if (letter === "E" || letter === "e") {
    return 14;
  } else if (letter === "F" || letter === "f") {
    return 15;
  } else {
    return letter * 1;
  }
}

function hexToDec(st) {
  let decimal = 0;
  let potencia = 0;

  for (let i = st.length - 1; i >= 0; i--) {
    valor = letterToNumber(st.charAt(i));
    elevado = 16 ** potencia * valor;
    decimal += elevado;
    potencia++;
  }

  return decimal;
}

if (isNaN(hexToDec(hexadecimal))) {
  document.write(
    "<sup> Error! Solo puedes ingresar valores hexadecimales. </br>(",
    hexadecimal,
    ")</sup>16<sup> no es un valor hexadecimal. </sup> "
  );
} else {
  document.write(
    "<sup>",
    hexadecimal,
    "</sup>16 ",
    "<sup> = ",
    hexToDec(hexadecimal),
    "</sup>10"
  );
}
