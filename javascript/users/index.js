let usersList = document.getElementById('users-list');

// Список пользователей
let users = [];

// Асинхронная функция получения списка пользователей
// Асинхронная функция умеет дожидаться выполнения операций
async function getUsers() {
    // Выполняем запрос на получение пользователей
    // await позволяет дождаться ответа от сервиса
    let response = await axios.get('https://dummyjson.com/users');
    users = response.data.users;
    showUsers();
}

function showUsers() {
    // Циклы в JavaScript
    // for (let элемент_массива of массив) {
    //  действия для выполнения над элементом
    // }
    for (let user of users) {
        // Создаем карточку пользователя
        let userCard = document.createElement('div');
        // Создаем аватар пользователя
        let userAvatar = document.createElement('div');
        // Создаем имя пользователя
        let userName = document.createElement('h2');
        // Создаем номер телефона пользователя
        let userPhone = document.createElement('p');
        // Создаем email пользователя
        let userEmail = document.createElement('p');
        // Создаем дату рождения пользователя
        let userBirthday = document.createElement('p');

        // Добавляем карточке пользователя класс user-card
        userCard.classList.add('user-card');
        // Добавляем аватару пользователя класс user-avatar
        userAvatar.classList.add('user-avatar');
        // Добавляем имени пользователя класс user-name
        userName.classList.add('user-name');

        // Поместим картинку внутрь div-элемента
        userAvatar.innerHTML = `<img src="${ user.image }" alt="">`
        // Поместим имя пользователя внутрь userName
        userName.innerHTML = user.firstName;
        // Поместим телефон пользователя внутрь userPhone
        userPhone.innerHTML = `<b>Телефон:</b> ${ user.phone }`;
        // Поместим email пользователя внутрь userEmail
        userEmail.innerHTML = `<b>Email:</b> ${ user.email }`;
        // Поместим телефон пользователя внутрь userPhone
        userBirthday.innerHTML = `<b>Дата рождения:</b> ${ user.birthDate }`;

        // Поместим аватар пользователя внутрь созданной карточки
        userCard.append(userAvatar, userName, userPhone, userEmail, userBirthday);

        // Поместить карточку пользователя в конец списка
        usersList.append(userCard);
    }
}

getUsers();