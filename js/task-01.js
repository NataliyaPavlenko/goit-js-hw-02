/*Напиши функцию logItems(array), которая получает массив и использует цикл for, 
который для каждого элемента массива будет выводить в консоль сообщение в формате[номер элемента]-[значение элемента].
Нумерация должна начинаться с 1. К примеру для первого элемента 
массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.*/

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const result = `${i + 1} - ${array[i]}`;
    console.log(result);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// const array = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// console.log(array[1]);
// console.log(array[3]);

// // const result = array[2] + " " + array[4];
// // const result = `${array[2]} ${array[4]}`;

// for (let i = 0; i < array.length; i += 1) {
//   console.log(array[i]);
// }

// console.log(result);
