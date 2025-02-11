console.log('Hello World');

// Всплывающие окна
// alert - вывод окна с текстовым сообщением
// alert('Добро пожаловать на сайт!');

// prompt - Вывод окна с возможностью ввода данных
// let userName = prompt('Как тебя зовут?');
//
// alert(`Тебя зовут ${ userName }`);


// confirm - Подтверждение действия
// let isValidName = confirm(`Ты уверен, что тебя зовут ${ userName }?`);

// if (isValidName) {
//     alert('Это хорошо');
// }
// else {
//     alert('Это печально :(');
// }

let userName = prompt('Как тебя зовут?');
let userAge = prompt('Сколько тебе лет?');

// Получение элемента по его идентификатору
let nameSpan = document.getElementById('name');
let ageSpan = document.getElementById('age');

// Изменение текста внутри html-элемента
nameSpan.innerText = userName;
ageSpan.innerText = userAge;


