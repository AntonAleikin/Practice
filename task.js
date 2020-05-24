"use strict";

const personalMovieDB = {

    count : 0, // Переменная numberOfFilms нам уже не нужна, так как мы обращаемся внутри. 
    movies : {},
    actors : {},
    genres : [],
    privat : false,


    start : function () {
        this.count = prompt("Сколько фильмов вы уже посмотрели?");
        // С помощью While можно создать цикл с условиями без числа кругов  
        while (this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = prompt("Сколько фильмов вы уже посмотрели?");
        }
    },
  
    rememberMyFilms : function () {
        // Вопросы и запись ответо в объект Movies при помощи цикла: 
        for(let i = 0; i < 2; i++) {
            var question = prompt("Один из последних просмотренных фильмов?"),
            question2 = prompt("На сколько оцените его?");

            // Соединяем все необходимые условия при помощи логических операторов:        
            if (question != "" && question2 != "" && question != null && question2 != null && question.length < 4) {
                console.log("done");
                this.movies[question] = question2;
            } else {
                console.log("failed"); 
                alert("Каждая строка должна быть заполнена. Нельза превышать 3 символа в названии фильма");
                i--; // Если условия НЕ соблюдены -- уменьшаем текущюю стадию цикла на 1 -- повторяем ее. 
            }
        }
    },

    detectPersonalLevel : function () {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >10 && this.count <30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    // Записывем жанры в массив без пропуска и отмены
    wrightYourGenres : function () {
        for(let i = 0; i < 1; i++) {
            // Записываем жанры в массив одной строкой через запятую с помощью Split
            const genresQ = prompt("Введите ваши любимые жанры через запятую").toLowerCase(); // Понижаем регистр 
            
            if (genresQ != "" && genresQ != null) {
                console.log("done");
                this.genres = genresQ.split(", "); // Записываем в массив и указываем запятую и пробел
                this.genres.sort(); // После того, как записали - сортируем! 
            } else {
                console.log("failed");
                i--;
            }
        }

        // Перебор уже записанного массива с помощью forEach 
        this.genres.forEach(function(item, i, genres) {
            console.log(`Любимый жанр № ${i+1} - это ${item}`);
        });
    },

    showMyDB : function () {
        if (this.privat == false) {
            console.log(personalMovieDB); // Выводим главный объект для проверки. 
        }
    },

    toggleVisibleMyDB : function () {
        if (this.privat == false) { 
            this.privat = true;
        } else {
            this.privat = false;
        }
    }, 

    // Сам добавил вопрос для установки привата
    privatSet : function () {
        const askPrivacy = confirm("Хотите сделать этот опрос общедоступным?");

        if (askPrivacy == true) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    }
};


personalMovieDB.start ();
personalMovieDB.rememberMyFilms ();
personalMovieDB.detectPersonalLevel ();
personalMovieDB.wrightYourGenres (); // Вопросы в массив Janres
personalMovieDB.privatSet (); // Мой вопрос для установки привата 
personalMovieDB.toggleVisibleMyDB (); // Переключаем приват 
personalMovieDB.showMyDB ();





