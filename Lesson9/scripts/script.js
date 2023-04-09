// const nums = [-1, 0, 98, 3, 111, 18, 48, -22, -16];


// // 1. Сформировать новый массив из положительных четных чисел
// // const nums_pos = nums.filter(el => el > 0 && el%2 === 0)

// // console.log(nums_pos);

// // 2. Сформировать новый массив из последних цифр положительных чисел 
// // => [8, 3, 3, 8, 8]

// // const new_arr = nums.filter(el  => el > 0).map(el => el % 10);
// // console.log(new_arr);

// // const bool = true;
// // console.log(typeof bool);

// // Дан массив с разными типами данных

// const arr = [1, 'hello', true, 6, 8, 'good night', 33];
// // const new_arr = arr.filter(el => typeof el === 'number');
// // console.log(new_arr)

// // 2. Сформировать новый массив, в котором булевые значения будут заменены на строку 'boolean';
// // const new_arr_bool = arr.map(el => typeof el === 'boolean' ? 'boolean': el)

// // console.log(new_arr_bool)

// const new_arr_2 = arr.map(el => typeof el === 'number' ? el*2 : el)
// console.log(new_arr_2)


// ДЗ:

const numbers1 = [44, 3, -10, 1, 98, 22, 2, -15, -32];

// 1. Дан массив numbers. Сформировать новый массив с положительными числами умноженными на 3
// const num_mult3 = numbers1.map(el => el*3);
// console.log(num_mult3);
// 2. Дан массив numbers. Сформировать новый массив, где все элементы больше 10 поделить на 2
const num10_dev2 = numbers1.map(el => el > 10 ? el / 2 : el);
console.log(num10_dev2);
// 3. Дан массив numbers. Сформировать новый массив, где все элементы заканчивающиеся на 2 заменены на false
const num_false = numbers1.map(el => Math.abs(el%10) === 2 ? 'false' : el);
console.log(num_false);
// 4. Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность). 
//Напишите filter, который оставляет только активных пользователей (true). 
//Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки. 

let array = [
  ['Максим', 'Грибов', true], 
  ['Антон', 'Куликов', true], 
  ['Светлана', 'Иванова', false], 
  ['Ольга', 'Петрова', true], 
  ['Сидр', 'Сидоров', false]
]
const arr = array.filter(el => el[2] === true);
console.log(arr);

const strings = arr.map(el => el.toString());
console.log(strings);
