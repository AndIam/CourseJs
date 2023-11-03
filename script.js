

let numberOffilms;

const personalMovieDB =
{
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    showMyDB: function (hidden) {
        if(!hidden)
        {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function writeYourGenres() {
        for(let i = 0; i < 3; i++)
        {
            const answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

            if(answer == '' || answer == null) {
                console.log('Error');
                i--;
            }
            else {
                personalMovieDB.genres[i] = answer;
            } 
        }
        
        personalMovieDB.genres.forEach((element, counter) => {
            console.log(`Любимый жанр ${counter + 1} - это ${element}`);
        });
    },
    start: function () {
        numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)) 
        {
            numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function ()
    {
        let count = 0;

        do {
            const first = prompt('Один из последних просмотренных фильмов?', '');
            const second = prompt('На сколько оцените его?', '');
            
            if(first == '' && first == null && first.length > 50 && second == '' && second == null && second.length > 50) {
                    console.log('Error');
            }
            else {
                    personalMovieDB.movies[first] = second;
                    console.log(personalMovieDB.movies);
                    count++;
            }
        } while(count < 3);
    },
    detectPersonalLevel: function ()
    {
        if(personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        }
        else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        }
        else if(personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        }   
        else {
            console.log("Произошла ошибка");
        }
    },
    toggleVisibleMyDB: function(obj) {
        console.log(obj.privat);
        obj['privat'] == true ? obj['privat'] = false : obj['privat'] = true;
        console.log(obj.privat);
    }
};

const personalFilmDB = Object.create(personalMovieDB);

personalFilmDB.start();
personalFilmDB.rememberMyFilms();
personalFilmDB.detectPersonalLevel();
personalFilmDB.toggleVisibleMyDB(personalFilmDB);
personalFilmDB.showMyDB(personalFilmDB.privat);
personalFilmDB.writeYourGenres();