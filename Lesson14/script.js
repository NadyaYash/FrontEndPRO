const square = document.querySelector('.square');
// square.addEventListener('click', (event) => event.target.style.backgroundColor = 'red');
// const text = document. querySelector('.text');
// square.addEventListener('click', () => text.style.color = 'red');

// 4. При клике на зеленый квадрат у параграфа меняется цвет текста на красный. При следующем клике - цвет меняется обратно на черный.
// text.style.color = 'black';
// square.addEventListener('click', () => {
//     console.log(text.style.color);
//     text.style.color = text.style.color === 'black' ? 'red' : 'black';
// })








// 5. При клике на зеленый квадрат создается параграф с произвольным текстом красного цвета
const rootElem = document.querySelector('.root');
// square.addEventListener('click', () => {
//     const par = document.createElement('p');
// par.style.color = 'red';
//     par.innerText = 'Hello.'
//     rootElem.append(par);

// })

// let counter_num = 0;
// const counter = document.createElement('p');
// counter.innerText = counter_num;
// rootElem.append(counter);

// square.addEventListener('click', () => {
//         const par = document.createElement('p');
//         par.innerText = ++counter_num;
//         rootElem.append(par);
//     })

// 7. При клике на зеленый квадрат создать и добавить в rootElem новый квадрат с размерами 100х100px желтого цвета с черным border

    square.addEventListener('click', () => {
        const new_div = document.createElement('div');
        new_div.classList.add('new_div');
        rootElem.append(new_div);
    }


    )
// ДЗ:
// 1. При клике на зеленый квадрат выводит в консоль число на единицу больше предыдущего, начать с 0
// 2. При клике на зеленый квадрат изменить его высоту и ширину на 400х400px и изменить цвет на синий
// 3. *Создать в index.html кнопку. При клике на кнопку изменить цвет фона на розовый. При повторном клике вернуть на белый цвет