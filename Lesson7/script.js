// ДЗ:
const numbers = [45, 73, -200, 0, 544, 23, 74, 3, 2, -11, -43];
// 1. Сформируйте массив из положительных чисел, заканчивающихся на 3
const positive = [];
numbers.forEach(el =>{
    if(el%10 === 3){
        positive.push(el);
    }
} )
console.log(positive);

// 2. Сформируйте массив положительных четных чисел
const positive1 = [];
numbers.forEach(el =>{
    if(el % 2 === 0 && el > 0){
        positive1.push(el);
    }
} )
console.log(positive1);


// 3. Сформируйте массив из всех чисел, умноженных на 3

const positive3 = [];
numbers.forEach(el =>   
        positive3.push(el*3) )
console.log(positive3);


// 4. Сформируйте массив из последних цифр каждого элемента массива

const last = [];
numbers.forEach(el => last.push(el%10));
console.log(last);