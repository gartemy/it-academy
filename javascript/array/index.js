// Массивы в JavaScript

let users = [ 'Иван', 'Павел', 'Анна' ]

// Получение элемента из массива
// массив[индекс элемента]
// индекс - порядковый номер, считая с нуля
console.log(users[1]);

// Длина массива (количество элементов)
// массив.length
console.log('Кол-во пользователей:', users.length);

// Добавление элемента массива
users.push('Дмитрий');

// Удаление элемента из конца массива
users.pop();

// Добавление элемента массива в начало
users.unshift('Босс');

// Удаление элемента массива из начала
users.shift();

// Удаление элемента по индексу
// splice(индекс для удаления, кол-во элементов)
// users.splice(1, 2);

console.log(users, users.length);

// Объекты в JavaScript

users = [
    {
        avatar: 'https://cdn1.flamp.ru/baa6d870a72fea7fd70b4b866cd456fe.png',
        name: 'Алексей',
        email: 'ivan@mail.ru',
        phone: '+7 (999) 143-143-14',
        birthday: '02.07.1998',
    },
    {
        avatar: 'https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
        name: 'Павел',
        email: 'pavel@mail.ru',
        phone: '+7 (989) 888-100-10',
        birthday: '09.09.1999',
    },
    {
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-1024.png',
        name: 'Анна',
        email: 'anna@mail.ru',
        phone: '+7 (988) 111-100-11',
        birthday: '08.06.1996',
    },
]

// Получение значения объекта по его ключу
let firstUser = users[0];

console.log('Первый пользователь:', firstUser);
console.log('Имя пользователя:', firstUser.name, firstUser['name']);

// Задать новое свойство объекта
firstUser['likes birds'] = true;
firstUser['phone'] = '+7 (111) 011-00-01';

// Удалить свойство объекта
delete firstUser['likes birds'];

console.log(users);

let usersList = document.getElementById('users-list');

// Функция для вывода пользователей на экран
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
        userAvatar.innerHTML = `<img src="${ user.avatar }" alt="">`
        // Поместим имя пользователя внутрь userName
        userName.innerHTML = user.name;
        // Поместим телефон пользователя внутрь userPhone
        userPhone.innerHTML = `<b>Телефон:</b> ${ user.phone }`;
        // Поместим email пользователя внутрь userEmail
        userEmail.innerHTML = `<b>Email:</b> ${ user.email }`;
        // Поместим телефон пользователя внутрь userPhone
        userBirthday.innerHTML = `<b>Дата рождения:</b> ${ user.birthday }`;

        // Поместим аватар пользователя внутрь созданной карточки
        userCard.append(userAvatar, userName, userPhone, userEmail, userBirthday);

        // Поместить карточку пользователя в конец списка
        usersList.append(userCard);
    }
}

showUsers();


let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

for (let [ index, value] of Object.entries(numbers)) {
    numbers[index] = value + 1
}

// numbers[0] = numbers[0] + 1
// numbers[1] = numbers[1] + 1
// numbers[2] = numbers[2] + 1
// numbers[3] = numbers[3] + 1
// numbers[4] = numbers[4] + 1
// numbers[5] = numbers[5] + 1

console.log(numbers)

// 1. Создать форму добавления пользователя с полями:
// Аватар пользователя
// Имя пользователя
// Номер телефона пользователя
// Email пользователя
// Дата рождения пользователя

// 2. Получить данные из формы и записать их в объект вида:
// {
//   avatar: 'значение из input',
//   name: 'значение из input',
//   email: 'значение из input',
//   phone: 'значение из input',
//   birthday: 'значение из input',
// }

// 3. Поместить объект пользователя в конец массива

// 4. Заново отрисовать список пользователей на экране

