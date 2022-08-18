"use strict";


const personalMovieDB = {
    /* count: numberOfFilm, */
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмовы ты посмотрел?', '');
    
        while (personalMovieDB.count == ' ' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = prompt('Сколько фильмовы ты посмотрел?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i=0; i<2; i++) {
            let film = prompt('Posledniy Film', '').trim(),
                rate = prompt('Oceni', '').trim();
        
            if(film != null && rate != null && film !='' && rate != '' && film.length < 50 ) {
                personalMovieDB.movies[film] = rate;
                console.log('done');
        
            } else {
                console.log('error');
                i--;
            }
        }
    }, 
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("malo");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("norm");
        } else if (personalMovieDB.count >= 30) {
            console.log("kinoman");
        } else {
            console.log("oshibka");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i=1; i<=3; i++) {
            let genre = prompt(`Vash lubimiy zhanr pod nomerom ${i}`);
            
            if(genre == null || genre =='') {
                console.log('oshibka');
                i--;
        
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Lyubimiy zhanr ${i + 1} - eto ${item}`);
    });
    },
    toogleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }   else {personalMovieDB.privat = true;}
    }
    
};




