alert('Добро пожаловать на сайт! Давай посчитаем 2 числа')

// Получение чисел для выполнения расчетов
let firstNumber = +prompt('Введи первое число');
let secondNumber = +prompt('Введи второе число');

// Получаем сумму двух чисел
let sum = firstNumber + secondNumber;

// Получение элемента с html-страницы
let sumSpan = document.getElementById('summa');

// Изменение текста внутри html-элемента
sumSpan.innerText = sum.toString();

console.log(sumSpan);