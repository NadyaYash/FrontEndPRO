// // ДЗ

// const users = [
//     {
//       id: 1,
//       first_name: 'Igor',
//       last_name: 'Ushanov',
//       age: 27,
//       city: 'Berlin',
//       country: 'Germany'
//     }, 
//     {
//       id: 2,
//       first_name: 'Irina',
//       last_name: 'Petrova',
//       age: 17,
//       city: 'Madrid',
//       country: 'Spain'
//     }, 
//     {
//       id: 3,
//       first_name: 'Olga',
//       last_name: 'Ivanova',
//       age: 63,
//       city: 'Paris',
//       country: 'France'
//     },
//     {
//       id: 4,
//       first_name: 'Petr',
//       last_name: 'Shepelin',
//       age: 41,
//       city: 'Bremen',
//       country: 'Germany'
//     },
//   ];

// // 1. Сформировать массив из имен совершеннолетних пользователей
// // const name_adults = users.filter(el => el.age >= 18).map(el => el.first_name);
// // console.log(name_adults);

// // // 2. Сформировать массив из людей, которые живут в Германии

// // const germany = users.filter(el => el.country === 'Germany');
// // console.log(germany);

// // 3. Сформировать массив людей, чей возраст находится в диапазоне от 30 до 70 включительно

// // const rate_age = users.filter(el => el.age >= 30 && el.age <= 70);
// // console.log(rate_age);

// // 4. *Сформировать массив из строк с информацией об полных именах юзеров
// // => ['Igor Ushanov', 'Irina Petrova', 'Olga Ivanova', 'Petr Shepelin']

// const strings_names = users.map(el => `${el.first_name} ${el.last_name}`);
// console.log(strings_names);