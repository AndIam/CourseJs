const numberOffilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const prsonalMovieDB =
{
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstQuestion = prompt('Один из последних просмотренных фильмов?', '');
const secondQuestion = prompt('На сколько оцените его?', '');

prsonalMovieDB.movies[firstQuestion] = secondQuestion;

console.log(prsonalMovieDB.movies);

