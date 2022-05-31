'use strict'
// No cambies los nombres de las funciones.
// 180/2 = 90
// 90/2 = 45
// 45/3 = 15
// 15/3 = 5
// 5/5 = 1

// 180 = 1*2*2*3*3*5 = [1, 2, 2, 3, 3, 5]

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
        let array = [1]
        let i = 2; //inicia en 2 para poder dividir por algo
        while(num !== 1) {
        if(num % i === 0){
        array.push(i);
        num = num/i; 
        } else {
          i++
        }
      }
      return array; 
    }

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // 5    8    9    1    7
  // i
  //     i+1

  // 5    8    1    9


let swap = true; //declaro la condicion de que swap se realice
while(swap){ //mientras pueda hacer el swap
  swap = false; //hasta que no se pueda hacer el swap
for (let i= 0; i < array.length-1; i ++){ //recorro el array

if(array[i] > array[i+1]){ //con la condicion de que el numero sea mayor al numero siguiente

let aux = array[i]; //guardar en un aux asi no perdemos el valor

array[i] = array[i+1]
array[i+1] = aux;
swap = true;
}
}
}
return array; 
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i++){
    let j = i-1; 
    let aux = array[i];
    while(j >= 0 && array[j]> aux) {
      array[j+1] = array[j]
      j--;
    }
    array[j+1] = aux;
  }
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for(let j = 0; j < array.length; j++){
  let minimo = j;
  for(let i= j+1; i < array.length; i++){
    if(array[i] < array[minimo]){
      minimo = i;
    }
  }
  if(j !== minimo){
    let aux = array[j];
    array[j] = array[minimo];
    array[minimo] = aux;
  }
}
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
