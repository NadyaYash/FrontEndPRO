const nums = [1, 2, 3, 6, 4];
// const array = [[1, 2], [3, 4], [5, 6]];
// // Найти самое большое число в массиве

// console.log(nums);
// console.log(...nums);
// console.log(...array);

// console.log(Math.max(...nums));
// // console.log(Math.max(1, 2, 3, 6, 4));
// // 1. Сформируйте массив из всех чисел, умноженных на 3

// const nums_mult_3 = [];
// nums.forEach(el => nums_mult_3.push(el * 3));
// const numsmap = nums.map(el => el*3);
// console.log(numsmap);

// 2. Сформируйте массив из последних цифр каждого элемента массива

// const last_nums = [];
// nums.forEach(el => last_nums.push(Math.abs(el % 10)));
// console.log(last_nums);
// const last_map = nums.map(el => Math.abs(el % 10));
// console.log(last_map);


// Сформировать массив, в котором числа больше 70 будут заменены на строку '>70', а числа меньше 70 будут заменены на строку '<70'
// const num_2 = num.map(el => el > 70 ? '>70' : '<70');
// console.log(num2);


// 6. Дан массив nums_2. Извлечь квадратный корень из чисел массива nums_2 и сформровать из них новый массив

const nums_2 = [4, 9, 16, 25]; // [2, 3, 4, 5]

// const new_nums_2 = [];
// for(let i = 0; i < nums_2.length; i++){
//   new_nums_2.push(Math.sqrt(nums_2[i]))
// }

// const num_sqr = nums_2.map(el => Math.sqrt(el));
// console.log(num_sqr);

// 3. Сформировать новый массив, в который попадут все отрицательные числа из массива num => [-5, -101]

// НЕПРАВИЛЬНО
// const num_map = num.map(el => {
//     if (el < 0){
//       return el
//     }
//   });
  
//   // ПРАВИЛЬНО
//   const num_filter = num.filter(el => el < 0);
  
//   console.log(num_map);
//   console.log(num_filter);
  
// 7. Сформируйте массив положительных четных чисел

// const positive_nums_even = [];
// nums.forEach(el => {
//   if(el > 0 && el % 2 === 0){
//     positive_nums_even.push(el)
//   }
// });
 
// const positive2 = nums_2.filter(el => el > 0 && el % 2 === 0 );
// console.log(positive2);

const greetings = ['hello', 'hi', 'good morning', 'good night', 'good evening'];

// 1. Сформировать новый массив, в который попадут строки длинее 6 символов

const gr = greetings.filter(el => el.length > 6);
console.log(gr);