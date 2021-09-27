"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено мало фильмов!');
    } else if (personalMovieDB.count <= 30) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка!');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцениете его?', '');
        if (a != '' && a != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш либимый жанр под номером ${i}`)
    }
}