"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
    // С помощью While можно создать цикл с условиями без числа кругов  
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
    }
}
start ();


const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}; 


 
function rememberMyFilms () {
// Вопросы и запись ответо в объект Movies при помощи цикла: 
for(let i = 0; i < 2; i++) {
    var question = prompt("Один из последних просмотренных фильмов?"),
        question2 = prompt("На сколько оцените его?");

    // Соединяем все необходимые условия при помощи логических операторов:        
    if (question != "" && question2 != "" && question != null && question2 != null && question.length < 4) {
        console.log("done");
        personalMovieDB.movies[question] = question2;
    } else {
        console.log("failed"); 
        alert("Каждая строка должна быть заполнена. Нельза превышать 3 символа в названии фильма");
        i--; // Если условия НЕ соблюдены -- уменьшаем текущюю стадию цикла на 1 -- повторяем ее. 
    }
}
}
rememberMyFilms ();


function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >10 && personalMovieDB.count <30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}
detectPersonalLevel ();



// Задаем вопросы и записываем в массив ответы с помощью функции. 
function wrightYourGenres () {
    for(let i = 0; i < 3; i++) {
        // Укороченная версия без переменной: 
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i+1}`));
    }
}
wrightYourGenres (); // Вопросы в массив Janres

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB); // Выводим главный объект для проверки. 
    }
}
showMyDB ();

