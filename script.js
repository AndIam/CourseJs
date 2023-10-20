const numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB =
{
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let count = 0;

do {

    const first = prompt('Один из последних просмотренных фильмов?', '');
    const second = prompt('На сколько оцените его?', '');

    if(first == '' && first == null && first.length > 50 && 
        second == '' && second == null && second.length > 50)
    {
        console.log('Error');
    }
    else
    {
        personalMovieDB.movies[first] = second;
        console.log(personalMovieDB.movies);

        count++;
    }

} while(count < 2);


if(personalMovieDB.count < 10)
{
    console.log("Просмотрено довольно мало фильмов");
}
else if(personalMovieDB.count > 10 && personalMovieDB.count < 30)
{
    console.log("Вы классический зритель");
}
else if(personalMovieDB.count >= 30)
{
    console.log("Вы киноман");
}
else
{
    console.log("Произошла ошибка");
}
