const user_form = document.querySelector('.user_form');
const users_container = document.querySelector('.users_container');

const users = [];
let id_num = 0;

const users_cards_render = users => {
    users_container.innerText = '';
    users.forEach(({firstname, lastname, age}) => {
        
    const card = document.createElement('div');
    const name_elem = document.createElement('p');
    const age_elem = document.createElement('p'); 
    
    name_elem.innerText = `User: ${firstname} ${lastname}`;
    age_elem.innerText = `Age: ${age}`;
    
    card.append(name_elem, age_elem);
    users_container.append(card);
    }); 
}

user_form.addEventListener('submit', (event)=> {
    event.preventDefault();

    

    // console.log('Форма')});
    const{ firstname, lastname, age} = event.target;
    id_num++;

    const user = {
        id: id_num,
        firstname: firstname.value ,
        lastname: lastname.value,
        age:age.value
    }

    users.push(user);
    users_cards_render(users);

//     console.log(firstname.value);
//     console.log(lastname.value)
// const greeting = document.createElement('p');

// greeting.innerHTML = `Hello ${firstname.value} ${lastname.value}`;
// users_container.append(greeting);

firstname.value = '';
lastname.value = '';
age.value = '';

})

// ДЗ
// Создать форму для сбора данных о работниках
// Форма имеет 5 полей для сбора данных: имя, фамилия, ставка, кол-во отработанных дней, ссылка на фото
// Собирать полученные данные, формировать из них объект и добавлять этот объект в массив workers
// Из массива workers формировать карточку работника.
// Карточка работника должна содержать 2 параграфа (имя/фамилия, зарплата = ставка * кол-во дней) и фото работника
// Стилизовать карточки на свой вкус

