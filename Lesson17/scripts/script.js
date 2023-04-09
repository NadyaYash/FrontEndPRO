// ДЗ
// Создать форму для сбора данных о работниках
// Форма имеет 5 полей для сбора данных: имя, фамилия, ставка, кол-во отработанных дней, ссылка на фото
// Собирать полученные данные, формировать из них объект и добавлять этот объект в массив workers
// Из массива workers формировать карточку работника.
// Карточка работника должна содержать 2 параграфа (имя/фамилия, зарплата = ставка * кол-во дней) и фото работника
// Стилизовать карточки на свой вкус

const user_form = document.querySelector('.user_form');
const user_cards = document.querySelector('.users_cards');

const workers = [];

const workers_render = workers => {
    user_cards.innerText = '';
    workers.forEach(({firstname, lastname, rate, days, photo}) => {
        
        const worker_card = document.createElement('div');
        const worker_name_lastname = document.createElement('p');
        const worker_salary = document.createElement('p');
        const worker_photo = document.createElement('img');

        worker_name_lastname.innerText = `${firstname} ${lastname}`;
        worker_salary.innerText = `${rate * days}`;
        worker_photo.setAttribute('src', photo);
        worker_photo.setAttribute('alt', `${firstname} ${lastname}`);

        worker_card.style.width = '400px';
        worker_card.style.height = '300px';
        worker_card.style.backgroundColor = 'green';
        worker_card.style.border = '2px solid black';
        worker_card.append(worker_name_lastname, worker_salary, worker_photo);
        user_cards.append(worker_card);
        
        

        
    });
}


user_form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {firstname, lastname, rate, days, photo} = event.target;

    const worker = {
        firstname: firstname.value,
        lastname: lastname.value,
        rate: rate.value,
        days: days.value,
        photo: photo.value
    }

    workers.push(worker);
    workers_render(workers);


    firstname.value = '';
    lastname.value = '';
    rate.value = '';
    days.value = '';
    photo.value = '';
})









