// Задан массив users. Для каждого пользователя создать карточку c аватаром, именем, фамилией и мэйлом. Карточка должна включать отображение фото. Почта кликабельна, при нажатии должно открывать приложение почты по умолчанию. Формат почты - Email: example@gmail.com

const users = [
    {
    id: 1,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
    id: 2,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
    id: 3,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
    }
  ];

  users.forEach(({id, email, first_name, last_name, avatar})=> {
    const block = document.querySelector('.root');
    const card_elem = document.createElement('div');
    const avatar_elem = document.createElement('img');
    const name_elem = document.createElement('p');
    const surname_elem = document.createElement('p');
    const email_elem = document.createElement('a');
    const email_text = document.createElement('p');
    
    

    block.append(card_elem);
    card_elem.append(avatar_elem, name_elem, surname_elem, email_text, email_elem);
    email_text.append(email_elem);
    
  

    name_elem.innerText = `Name: ${first_name}`;
    surname_elem.innerText = `Last name: ${last_name}`;
    email_text.innerText = 'Email :';
    email_elem.innerText = 'Написать сотдруднику';

    


    avatar_elem.setAttribute('src', avatar);
    avatar_elem.setAttribute('alt', 'avatar');
    email_elem.setAttribute('href', `mailto:${email}`);


    



  })



  