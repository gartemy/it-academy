// Функции
// function имя_функции() {
//   тело функции
// }

// Пример функции в JavaScript
function sayHello() {
    alert('Привет');
}

// Вызов функции
sayHello();

// Получить кнопку из html
let button = document.getElementById('button');

// Вызвать функцию при нажатии на кнопку
button.addEventListener('click', sayHello);

// Калькулятор

function sumOfNumbers() {
    // Получение 1-го текстового поля
    let input1 = document.getElementById('first');

    // Число, введенное в 1-е текстовое поле
    let firstNumber = input1.value;

    // Получение 2-го текстового поля
    let input2 = document.getElementById('second');

    // Число, введенное во 2-е текстовое поле
    let secondNumber = input2.value;

    // Сумма введенных чисел
    let sum = +firstNumber + +secondNumber;

    // Получаем span элемент со значением суммы
    let span = document.getElementById('sum');

    // Подставляем найденную сумму в span
    span.innerText = sum;
}

// Получаем кнопку для нахождения суммы
let sumButton = document.getElementById('sum-button');

// Отслеживаем нажатие на кнопку "Найти сумму"
sumButton.addEventListener('click', sumOfNumbers);

// Дополнительно
let body = document.body;

// Изменение background страницы
body.style.backgroundColor = 'pink';

let colorButton = document.getElementById('change-color');

function changeColor() {
    if (document.body.style.backgroundColor == 'green') {
        document.body.style.backgroundColor = 'pink';
    }
    else {
        document.body.style.backgroundColor = 'green';
    }
}

colorButton.addEventListener('click', changeColor)

console.log(body);