"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
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

if (personalMovieDB.count < 10) {
    alert('Просмотрено мало фильмов!');
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель!');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка!');
}

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцениете его?', '');
    if (a != '' && a != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

console.log(personalMovieDB.movies);