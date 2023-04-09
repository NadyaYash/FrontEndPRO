// const form = document.querySelector('.form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const{text} = event.target;
//     console.log(text.value);
// })

// const button = document.querySelector('.buttonbtn');
// addEventListener('click', () =>{
//     document.body.style.backgroundColor = 'black';
// })

// const array = ['pink', 'green', 'blue'];
// const colors = document.querySelector('.colors');

// let colorIndex = 0;
// colors.addEventListener('click', () => {
    
//     document.body.style.backgroundColor = array[colorIndex++ % array.length];
// });


// // 4. Дан массив с картинками. Первая картинка - no image available, далее - картинки из массива по порядку
// const photos = [
//     'https://reqres.in/img/faces/1-image.jpg',
//     'https://reqres.in/img/faces/2-image.jpg',
//     'https://reqres.in/img/faces/3-image.jpg',
//     'https://reqres.in/img/faces/4-image.jpg',
//     'https://reqres.in/img/faces/5-image.jpg'
//   ]
//   let indexPhotos = 0;
// //   const image = document.querySelector('.image');
// //   image.addEventListener('click', (event) => {
// //     event.target.src = photos[indexPhotos++ % photos.length]
// //   })

//   // 5. Дан массив с картинками. Первая картинка - первая картинка массива. При клике на кнопки, переключать на следующую/предыдущую картинку

//   const image = document.querySelector('.slader');
//   const firstBtn = document.querySelector('.btn1');
//   const secondBtn = document.querySelector('.btn2');
//   firstBtn.addEventListener('click', () => {
//     image.src = photos[indexPhotos-- % photos.length]
//     if(indexPhotos === -1){
//         indexPhotos = photos.length;
//     }
// })

//  secondBtn.addEventListener('click', () => {
//     image.src = photos[indexPhotos++ % photos.length]
//   })

//   const new_button = document.querySelector('.buttonBtn');
//   let param = 30;
//   new_button.style.height = param + 'px';
//   new_button.style.width = param + 'px';
  
  
//   new_button.addEventListener('click', (event) => {
//     param += 10;
//     event.target.style.width = param + 'px' ;
//     event.target.style.height = param + 'px'; 
//   })

  // ДЗ
// // 1. При клике на кнопку менять ее цвет на рандомный
// const random = document.querySelector('.random_color');
// random.addEventListener('click', (event)=>{
//   const r = Math.floor(Math.random()*256);
//   const g = Math.floor(Math.random()*256);
//   const b = Math.floor(Math.random()*256); 
// event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// })
// 2. При клике на кнопку меня цвет заднего фона на рандомный
const body_color = document.querySelector('.body_color');
body_color.addEventListener('click', ()=>{
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256); 
document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})


// 3. Создать генератор бросаемых костей (вычисляются два случайных числа от 1 до 6)

const drop = document.querySelector('.drop');
const result_container = document.querySelector('.result_container')
drop.addEventListener('click', ()=>{
  const a = 1;
  const b = 6;
  const c = Math.floor((Math.random()*(b - a + 1)) + 1);
  const d = Math.floor((Math.random()*(b - a + 1)) + 1);
  const result = document.createElement('p');
  result.innerText = `${c} X ${d}`
  result_container.append(result);
})



