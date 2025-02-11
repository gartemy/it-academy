const API_KEY = "4d5b1014-2ce3-49d6-b2ac-e47e01ed4533";
let movie = null;

async function getMovie() {
    // Получаем список параметров из адреса страницы в браузере - window.location.search
    const params = new URLSearchParams(window.location.search);
    // Получаем параметр id, который мы передали со страницы со всеми фильмами
    const filmId = params.get('id');
    // Если не нашли параметр id, то вернем пользователя на страницу со всеми фильмами, так как без него мы не сможем найти фильм
    if (filmId === null) {
        // Выводим предупреждение о том, что фильм не найден
        alert('Фильм не найден!');
        // Открываем в браузере страницу со списком всех фильмов
        window.open('index.html');
    }
    else {
        // Подставляем полученный id фильма в ссылку на получение данных о конкретном фильме
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${ filmId }`, {
            headers: {
                "Content-Type": 'application/json',
                "X-API-KEY": API_KEY,
            },
        });
        movie = response.data;
    }
}

getMovie();