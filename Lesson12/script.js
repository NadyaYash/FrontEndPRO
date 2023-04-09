const new_elem = document.querySelector('.root');
// const block = document.createElement('div');
// const par1 = document.createElement('p');
// const par2 = document.createElement('p');
// const par3 = document.createElement('p');

// const user = {
//     firsname: 'Irina',
//     lastname: 'Ivanova',
//     age: 21
//   }

//   const users = [
//     {
//       id: 1,
//       firstname: 'Irina',
//       lastname: 'Petrova',
//       age: 38
//     },
//     {
//       id: 2,
//       firstname: 'Anton',
//       lastname: 'Ushanov',
//       age: 12
//     },
//     {
//       id: 3,
//       firstname: 'Maxim',
//       lastname: 'Galkin',
//       age: 50
//     },
//     {
//       id: 4,
//       firstname: 'Nelli',
//       lastname: 'Efremyan',
//       age: 27
//     },
//     {
//       id: 5,
//       firstname: 'Alla',
//       lastname: 'Pugacheva',
//       age: 70
//     }
//   ];



// const rootElem = document.querySelector('.root');

// users
// .filter(el => el.age <=30)
// .forEach(({ firstname, lastname, age }) => {
//   const cardElem = document.createElement('div');
//   const firstnameElem = document.createElement('p');
//   const lastnameElem = document.createElement('p');
//   const ageElem = document.createElement('p');

//   // const { firstname, lastname, age } = el;

//   firstnameElem.innerText = `Firstname: ${firstname}`;
//   lastnameElem.innerText = `Lastname: ${lastname}`;
//   ageElem.innerText = `Firstname: ${age}`;

//   cardElem.classList.add('card_elem');
//   cardElem.style.backgroundColor = age > 18 ? 'green' : 'pink';
//   if(firstname[0] === 'A'){
//     cardElem.style.fontSize = '20px';
//   }
  
   

//   cardElem.append(firstnameElem, lastnameElem, ageElem);
//   rootElem.append(cardElem);
// })



// 6. Вывести на экран только тех, кто младше 30 лет (включительно)




// 4. Стилизовать карточки, используя следующие свойства: border, padding, border-radius, width;


// 5. Если пользователь совершеннолетний, то покрасить карточку в зеленый, если нет - то в розовый

//Задан массив объектов workers. Выведите на экран карточки со следующей информацией по всем работникам: ID, Имя, Фамилия, Возраст, Зарплата. Зарплата рассчитывается через умножение ставки на количество дней. Примените стили к карточкам: width, padding, border, background-color.

const workers = [
  {
    id: 1,
    first_name: "Olga",
    last_name: "Petrova",
    age: 18,
    rate: 100,
    days: 15,
    photo: "https://reqres.in/img/faces/12-image.jpg",
    progress: 50,
    email: 'example1@gmail.com'
  },

  {
    id: 2,
    first_name: "Petr",
    last_name: "Ivanov",
    age: 46,
    rate: 70,
    days: 22,
    photo: "https://reqres.in/img/faces/4-image.jpg",
    progress: 10,
    email: 'example2@gmail.com'
  },

  {
    id: 3,
    first_name: "Oleg",
    last_name: "Orlov",
    age: 32,
    rate: 34,
    days: 10,
    photo: "https://reqres.in/img/faces/10-image.jpg",
    progress: 75,
    email: 'example3@gmail.com'
  },

  {
    id: 4,
    first_name: "Irina",
    last_name: "Medvedeva",
    age: 22,
    rate: 85,
    days: 17,
    photo: "https://reqres.in/img/faces/2-image.jpg",
    progress: 30,
    email: 'example4@gmail.com'
  },
];

workers.forEach(({id, first_name, last_name, age, rate, days, photo, progress, email}) => {
  const card = document.createElement('div');
  const id_elem = document.createElement('p');
  const firsname = document.createElement('p');
  const lastname = document.createElement('p');
  const age_elem = document.createElement('p');
  const salary = document.createElement('p');
  const picture_elem = document.createElement('img');
  const elem_a = document.createElement('a');
  const progress_block = document.createElement('div');
  const progress_line = document.createElement('div');
  const progress_value = document.createElement('p');
  
  id_elem.innerText = `ID: ${id}`;
  firsname.innerText = `First name: ${first_name}`;
  lastname.innerText = `Last name: ${last_name}`;
  age_elem.innerText = `Age: ${age}`;
  salary.innerText = `Salary: ${rate * days}`;
  elem_a.innerText = 'Написать сотруднику';
  progress_value.innerText = `${progress}%`

  progress_line.style.width = `${progress}%`;
  



  picture_elem.setAttribute('src', photo);
  picture_elem.setAttribute('alt', `${first_name} ${lastname}`);
  elem_a.setAttribute('href', `mailto:${email}`);



  card.classList = 'style';
  progress_block.classList = 'progress_block';
  progress_line.classList = 'progress_line';
  progress_value.classList = 'progress_value';

  progress_block.append(progress_line, progress_value);
  

  card.append(picture_elem, id_elem, firsname, lastname, age_elem, salary, elem_a, progress_block);
  new_elem.append(card);
  

})


// const users_cards = workers.map(({ first_name, last_name, age, rate, days }) => {
//   const cardElem = document.createElement('div');
//   const firstnameElem = document.createElement('p');
//   const lastnameElem = document.createElement('p');
//   const ageElem = document.createElement('p');
//   const salaryElem = document.createElement('p');

//   firstnameElem.innerText = `Firstname: ${first_name}`;
//   lastnameElem.innerText = `Lastname: ${last_name}`;
//   ageElem.innerText = `Age: ${age}`;
//   salaryElem.innerText = `Salary: ${rate * days}`

//   cardElem.append(firstnameElem, lastnameElem, ageElem, salaryElem);
//   return cardElem
// });

// rootElem.append(...users_cards);

// Вывести каждому пользователю email - сделать его кликабельным. При клике должно открываться приложение по умолчанию, которое работает с почтой