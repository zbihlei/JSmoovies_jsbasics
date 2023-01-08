/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


document.addEventListener('DOMContentLoaded', ()=>{


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
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

          addForm.addEventListener('submit', (event)=>{
            event.preventDefault();

            let newFilm = addInput.value;
            const favorite = checkbox.checked;

            if(newFilm){

                if(newFilm.length >21){
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }
                if(favorite){
                    console.log('Add favorite');
                }

                movieDB.movies.push(newFilm);
                sortArray(movieDB.movies);
    
                createMoovieList(movieDB.movies, films);
            }

            event.target.reset();

 
        });
          
          
        const deleteAdv = (arr)=>{
               
    arr.forEach(item =>{
        item.remove();
    });
    
     };

        const makeChanges = ()=>{
    genre.textContent = 'драма'; 
    backgr.style = 'background: url("img/bg.jpg") center center / cover no-repeat; background-position: top;';
       };


        const sortArray = (arr)=>{
            arr.sort();
        };

    
    function createMoovieList(films, parent){
        parent.innerHTML = '';
        sortArray(films);

       films.forEach((fl, i) =>{  
        
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${fl}
            <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn , i) =>{
            btn.addEventListener('click',()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i ,1);
                
                createMoovieList(films, parent);

            });
        });
        
    }
    makeChanges();
    deleteAdv(addblocks);
    createMoovieList(movieDB.movies, films);
    
    
    //my way to add films
    
    // let newList =[];
    // function addElementToList(list){
    //      newList = list.concat();
    
    //     subm.addEventListener('click', (ev)=>{
    //         let newMoovie = inpVal.value;
    
    //         newList.push(newMoovie); 
        
    //     films.innerHTML= '';
    
    //     newList.forEach((fl, i) =>{  
    
    //             films.innerHTML += `
    //             <li class="promo__interactive-item">${i+1} ${fl}
    //             <div class="delete"></div>
    //             </li>
    //             `;
    
                
    //     });
    //     ev.preventDefault();
        
    //     });
        
    // };
    
    
    // addElementToList(movieDB.movies);
    
    
});
