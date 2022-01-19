const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WWINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 4, 8],
    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessage = document.querySelector('[data-winning-message-text')
winningMessageE = document.querySelector('winningMessage')
let circleTurn

startGame()

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handClick, { once: true })
    })
    setBoardHoverClass()
}


function handClick(e) {
    // console.log("clicked")
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    }
    swapTurns()
}

function endGame(draw) {
    if (draw) {

    } else {
        winningMessage.innerText = `${circleTurn ? "O's" :
            "X's"} Wins!`
    }
    winningMessageE.classList.add('show')
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn

}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }

}


function checkWin(currentClass) {
    return WWINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}