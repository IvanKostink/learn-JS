const numberOfFilm = prompt('Сколько фильмовы ты посмотрел?', '');
const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let film = prompt('Posledniy Film', ''),
    rate = prompt('Oceni', ''),
    film1 = prompt('Posledniy Film', ''),
    rate1 = prompt('Oceni', '');

personalMovieDB.movies[film] = rate;
personalMovieDB.movies[film1] = rate1;

console.log(personalMovieDB);
