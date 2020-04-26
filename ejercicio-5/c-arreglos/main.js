let arr = [6, 5, 4, 3, 2, 1];

function imprimirGrafico(arr) {
  let valor;
  for (valor of arr) {
    for (i = 0; i < valor; i++) {
      document.write("*");
    }
    document.write("</br>");
  }
}

imprimirGrafico(arr);
