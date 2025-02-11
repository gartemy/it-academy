let whiteButton = document.getElementById('white-button')
let blackButton = document.getElementById('black-button')
let greyButton = document.getElementById('grey-button')
let goldenButton = document.getElementById('golden-button')
let blueButton = document.getElementById('blue-button')

let minus10Button = document.getElementById('minus10')
let minus1Button = document.getElementById('minus1')
let plus1Button = document.getElementById('plus1')
let plus10Button = document.getElementById('plus10')
let total = document.getElementById('total')
let changeButton = document.getElementById('change')
let count = 0

let even = document.getElementById('even')
let three = document.getElementById('three')
let five = document.getElementById('five')
let seven = document.getElementById('seven')

let historyEven = document.getElementById('history-even')
let historyThree = document.getElementById('history-three')
let historyFive = document.getElementById('history-five')
let historySeven = document.getElementById('history-seven')
let history = document.getElementById('history')

function colorWhite() {
    document.body.style.background = 'white'
    document.body.style.color = 'black'
}

whiteButton.addEventListener('click', colorWhite)

function colorBlack() {
    document.body.style.background = 'black'
    document.body.style.color = 'white'
}

blackButton.addEventListener('click', colorBlack)

function colorGrey() {
    document.body.style.background = 'grey'
    document.body.style.color = 'black'
}

greyButton.addEventListener('click', colorGrey)

function colorGolden() {
    document.body.style.background = 'goldenrod'
    document.body.style.color = 'black'
}

goldenButton.addEventListener('click', colorGolden)

function colorBlue() {
    document.body.style.background = 'darkblue'
    document.body.style.color = 'greenyellow'
}

blueButton.addEventListener('click', colorBlue)

function checkEven() {
    if (count % 2 == 0) {
        even.innerText = 'Да'
    }
    else {
        even.innerText = 'Нет'
    }
}

function checkThree() {
    if (count % 3 == 0) {
        three.innerText = 'Да'
    }
    else {
        three.innerText = 'Нет'
    }
}

function checkFive() {
    if (count % 5 == 0) {
        five.innerText = 'Да'
    }
    else {
        five.innerText = 'Нет'
    }
}

function checkSeven() {
    if (count % 7 == 0) {
        seven.innerText = 'Да'
    }
    else {
        seven.innerText = 'Нет'
    }
}

function checkHistory() {
    if (count % 2 == 0) {
        historyEven.innerText = historyEven.innerText + ' ' + count
    }
    if (count % 3 == 0) {
        historyThree.innerText = historyThree.innerText + ' ' + count
    }
    if (count % 5 == 0) {
        historyFive.innerText = historyFive.innerText + ' ' + count
    }
    if (count % 7 == 0) {
        historySeven.innerText = historySeven.innerText + ' ' + count
    }
    if (count % 2 != 0 && count % 3 != 0 && count % 5 != 0 && count % 7 != 0) {
        history.innerText = history.innerText + ' ' + count
    }
}

function minus10() {
    count = count - 10
    total.innerText = count

    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}

minus10Button.addEventListener('click', minus10)

function minus1() {
    count = count - 1
    total.innerText = count

    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}

minus1Button.addEventListener('click', minus1)

function plus10() {
    count = count + 10
    total.innerText = count

    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}

plus10Button.addEventListener('click', plus10)

function plus1() {
    count = count + 1
    total.innerText = count

    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}

plus1Button.addEventListener('click', plus1)

function changeNumber() {
    count = +prompt('Укажите число')
    total.innerText = count

    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}

changeButton.addEventListener('click', changeNumber)