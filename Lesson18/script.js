// ДЗ
const container = document.querySelector('.cards_container')
// 1. Отправить fetch-запрос по ссылке https://jsonplaceholder.typicode.com/todos
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=> res.json())
.then(json => cards_rend(json))

// 2. Из полученного ответа сформировать карточки с задачами. Карточка содержит два параграфа - title (название задачи) и status ('done', если completed: true, или 'not done', если completed: false)

const cards_rend = json=> {
    json.forEach(({title, completed}) => {
        const mini_container = document.createElement('div');
        const title_elem = document.createElement('p');
        const status_elem = document.createElement('p');

        title_elem.innerText = title;
        status_elem.innerText = completed === false? 'not done' : 'done';

        mini_container.classList.add('mini_container');

        mini_container.style.backgroundColor = completed===false? 'lightgrey': 'lightgreen';

        mini_container.append(title_elem, status_elem);
        container.append(mini_container);


    });
}

// 3. Стилизовать карточки (border, padding, width, border-radius)
// 4. Если задача выполнена, покрасить карточку в светло-зеленый цвет. Если не выполнена - в светло-серый.