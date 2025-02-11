let title = document.getElementById('title');
let category = document.getElementById('category');
let description = document.getElementById('description');
let button = document.getElementById('button');
let list = document.getElementById('list');
let searchInput = document.getElementById('search');
let searchCategory = document.getElementById('search-category');
let searchButton = document.getElementById('search-button');
let resetButton = document.getElementById('reset-button');
let count = 0;

function addTask() {
    // Создание нового элемента с помощью createElement
    let task = document.createElement('div');
    let taskTitle = document.createElement('div');
    let taskCategory = document.createElement('div');
    let taskDescription = document.createElement('div');
    let deleteButton = document.createElement('button');
    let taskNumber = document.createElement('div');

    function deleteTask() {
        // Удаление элемента со страницы
        task.remove();
        count = count - 1;
    }

    deleteButton.addEventListener('click', deleteTask);

    // Добавляем HTML внутрь элементов
    taskTitle.innerHTML = `<b>Название:</b> ${ title.value }`;
    taskCategory.innerHTML = `<b>Категория:</b> `;
    if (category.value !== 'Выберите категорию') {
        taskCategory.innerHTML += category.value;
    }
    taskDescription.innerHTML = `<b>Описание:</b> ${ description.value }`;
    deleteButton.innerHTML = 'Удалить';

    count = count + 1;
    taskNumber.innerHTML = `<b>Задача №${ count }</b>`;

    // Добавляем СSS-классы на элементы
    task.classList.add('task');
    taskTitle.classList.add('task-title');
    taskCategory.classList.add('task-category');
    taskDescription.classList.add('task-description');
    taskNumber.classList.add('task-number');

    // Добавляем название и описание задачи внутрь div-элемента
    task.append(taskNumber, taskTitle, taskCategory, taskDescription, deleteButton);

    // Добавляем новый элемент в конец списка задач
    list.append(task);

    // Очищаем поля формы
    title.value = '';
    category.value = 'Выберите категорию';
    description.value = '';
}

button.addEventListener('click', addTask);

function searchTask() {
    let tasks = document.getElementsByClassName('task');

    for (let task of tasks) {
        let titles = task.getElementsByClassName('task-title');
        let categories = task.getElementsByClassName('task-category');
        let title = titles[0];
        let taskCategory = categories[0].innerText.split(':')[1].trim();

        if (
            title.innerText.includes(searchInput.value) === false
            || searchCategory.value !== taskCategory
        ) {
            task.style.display = 'none'
        }
    }
}

searchButton.addEventListener('click', searchTask);

function resetTasks() {
    let tasks = document.getElementsByClassName('task')

    for (let task of tasks) {
        task.style.display = 'block'
    }
}

resetButton.addEventListener('click', resetTasks)