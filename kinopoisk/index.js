const API_KEY = "4d5b1014-2ce3-49d6-b2ac-e47e01ed4533";
const moviesList = document.querySelector('.movies');
const pagesList = document.querySelector('.pages');

let movies = [];
let currentPage = 1;

async function getMovies() {
    const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
        params: {
            type: 'TV_SERIES',
            page: currentPage,
        },
        headers: {
            "Content-Type": 'application/json',
            "X-API-KEY": API_KEY,
        },
    });
    movies = response.data.items;
    const totalPages = response.data.totalPages;
    showMovies();
    createPageButtons(totalPages);
}

function showMovies() {
    moviesList.innerHTML = '';
    for (let movie of movies) {
        const movieCard = document.createElement('div');
        const movieCover = document.createElement('div');
        const movieTitle = document.createElement('div');
        const movieAverage = document.createElement('div');

        movieCard.classList.add('movie');
        movieCover.classList.add('movie__cover-inner');
        movieTitle.classList.add('movie__title');
        movieAverage.classList.add(`movie__average`);

        movieCover.innerHTML = `<img class="movie__cover" src="${ movie.posterUrlPreview }" alt="${ movie.nameRu }">`;
        movieTitle.innerHTML = `${ movie.nameRu || movie.nameOriginal } (${ movie.year })`;
        movieAverage.innerHTML = movie.ratingKinopoisk.toFixed(1);

        movieCard.append(movieCover, movieTitle, movieAverage);

        moviesList.appendChild(movieCard);

        function redirectToMovie() {
            // Указываем ссылку на html-страницу о фильме movie.html
            // Добавляем к ссылке параметр id (записывается через ?=), в котором укажем id фильма на сайте кинопоиска
            let url = `movie.html?id=${ movie.kinopoiskId }`;
            // Откроем новое окно в браузере по ссылке вида: movie.html?id=123
            // Подробнее об открытии окон в браузере: https://learn.javascript.ru/popup-windows
            window.open(url, '_self');
        }

        movieCard.addEventListener('click', redirectToMovie);
    }
}

function createPageButtons(totalPages) {
    pagesList.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement('button');
        button.classList.add('page');
        if (i + 1 === currentPage) {
            button.classList.add('active');
        }
        button.innerText = (i + 1).toString();
        button.onclick = () => changePage(i + 1);
        pagesList.append(button);
    }
}

async function changePage(page = 1) {
    currentPage = page;
    let pages = document.getElementsByClassName('page');

    for (const pageDiv of pages) {
        pageDiv.classList.remove('active');

        if (+pageDiv.innerText === +page) {
            pageDiv.classList.add('active');
        }
    }

    await getMovies();
    window.scrollTo(0, 0);
}

getMovies();