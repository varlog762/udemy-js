"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt("Сколько фильмов вы посмотрели?", "");
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            alert('Просмотрено мало фильмов!');
        } else if (this.count <= 30) {
            alert('Вы классический зритель!');
        } else if (this.count > 30) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка!');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцениете его?', '');
            if (a != '' && a != null && a.length < 50) {
                this.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    toggleVisibleMyDB: function () {
        if (this.privat == false) {
            this.privat = true;
        } else if (this.privat == true) {
            this.privat = false;
        }
        this.showMyDB();
        console.log(this.privat);
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            this.genres[i - 1] = prompt(`Ваш либимый жанр под номером ${i}`);
            while (this.genres[i - 1] == '' || this.genres[i - 1] == null) {
                this.genres[i - 1] = prompt(`Ваш либимый жанр под номером ${i}`);
            }
        }
        this.genres.forEach(function (value, index) {
            console.log(`Любимый жанр ${index + 1} - это ${value}`);
        });
    },
    printDBProp: function () {
        for (let key in this.genres) {
            console.log(`Свойство ${key}, значение ${obj[key]}`);
        }
    }
};

personalMovieDB.start();
console.log(personalMovieDB.count);
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();

// for (let i = 1; i < 10; i++) {
//     personalMovieDB.toggleVisibleMyDB();
// };
personalMovieDB.writeYourGenres();
// personalMovieDB.printDBProp();
console.log(personalMovieDB);