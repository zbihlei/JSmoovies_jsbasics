/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const addblocks = document.querySelectorAll('.promo__adv>img'),
      genre = document.querySelector('.promo__genre'),
      backgr = document.querySelector('.promo__bg'),
      films = document.querySelector('.promo__interactive-list'),
      subm = document.querySelector('button'),
      inpVal = document.querySelector('.adding__input'),
      delButton = document.querySelector('.delete');


addblocks.forEach(item =>{
    item.remove();
});

genre.textContent = 'драма';

backgr.style = 'background: url("img/bg.jpg") center center / cover no-repeat; background-position: top;';

// films.innerHTML = '';

// movieDB.movies.sort();


let newList =[];
function addElementToList(list){
     newList = list.concat();

    subm.addEventListener('click', (ev)=>{
        let newMoovie = inpVal.value;

        newList.push(newMoovie); 
    
    films.innerHTML= '';

    newList.forEach((fl, i) =>{  

            films.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${fl}
            <div class="delete"></div>
            </li>
            `;

            
    });
    ev.preventDefault();
    
    });
    
};

    delButton.addEventListener('click', (ev)=>{
        console.log('delete');
    });



addElementToList(movieDB.movies);
