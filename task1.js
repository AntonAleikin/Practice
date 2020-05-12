"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}; 

const question = prompt("Один из последних просмотренных фильмов?"),
    question2 = prompt("На сколько оцените его?"),
    question3 = prompt("Один из последних просмотренных фильмов?"),
    question4 = prompt("На сколько оцените его?");

personalMovieDB.movies[question] = question2; // Записываем ответы в объект при помощи []
personalMovieDB.movies[question3] = question4;

console.log(personalMovieDB.count, personalMovieDB.movies); // Поверяем, записались ли ответ в объекты. 
 