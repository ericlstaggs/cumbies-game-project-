const symbols = ['🍎','🚀','🌟','⚽','🎵','🔥','🐱','🍩'];

const gameBoard = document.getElementById('gameBoard');
const movesDisplay = document.getElementById('moves');
const matchesDisplay = document.getElementById('matches');
const timerDisplay = document.getElementById('timer');
const messageDisplay = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matches = 0;
let timer = 0;
let timeElapsed = null;
let gameStarted = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTimer() {
    if (timeElapsed) return;
    timeElapsed = setInterval(() => {
        timer++;
        timerDisplay.textContent = timer;
    }, 1000);
}

function createBoard() {
    const cardValues = shuffle([...symbols, ...symbols]);
    gameBoard.innerHTML = '';

    cardValues.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.symbol = symbol;
        card.dataset.index = index;

        card.innerHTML = `
            <div class="memory-card-inner">
                <div class="memory-face memory-back">${symbol}</div>
                <div class="memory-face memory-front">?</div>
            </div>
        `;

        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.classList.contains('matched')) return;

    if (!gameStarted) {
        gameStarted = true;
        startTimer();
    }

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    moves++;
    movesDisplay.textContent = moves;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;
    if (isMatch) {
        handleMatch();
    } else {
        unflipCards();
    }
}

function handleMatch() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matches++;
    matchesDisplay.textContent = matches;
    resetTurn();
    checkWin();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetTurn();
    }, 900);
}

function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function checkWin() {
    if (matches === symbols.length) {
        clearInterval(timeElapsed);
        timeElapsed = null;
        messageDisplay.textContent = `Congratulations! You won in ${moves} moves and ${timer} seconds!`;
    }
}

function restartGame() {
    clearInterval(timeElapsed);
    timeElapsed = null;
    timer = 0;
    moves = 0;
    matches = 0;
    gameStarted = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;

    movesDisplay.textContent = moves;
    matchesDisplay.textContent = matches;
    timerDisplay.textContent = timer;
    messageDisplay.textContent = '';

    createBoard();
}

restartBtn.addEventListener('click', restartGame);
createBoard();
