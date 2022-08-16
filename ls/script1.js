"use strict";
let numberOfFilm;

function start () {
    numberOfFilm = prompt('Сколько фильмовы ты посмотрел?', '');

    while (numberOfFilm == ' ' || numberOfFilm == null || isNaN(numberOfFilm) ) {
        numberOfFilm = prompt('Сколько фильмовы ты посмотрел?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i=0; i<2; i++) {
        let film = prompt('Posledniy Film', ''),
            rate = prompt('Oceni', '');
    
        if(film != null && rate != null && film !='' && rate != '' && film.length < 50 ) {
            personalMovieDB.movies[film] = rate;
            console.log('done');
    
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("malo");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("norm");
    } else if (personalMovieDB.count >= 30) {
        console.log("kinoman");
    } else {
        console.log("oshibka");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i=1; i<=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Vash lubimiy zhanr pod nomerom ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);

    
