// DOM Variables
const gameBoardWrapper = document.querySelector(".game-board");
const turnMessage = document.querySelector(".turn")
const resultMessage = document.querySelector("#result")
const gameOverMessage = document.querySelector(".gameover-message");
const playAgain = document.querySelector("#play-again")

const playerFactory = (playerName, wins=0) => {
    const getName = () => playerName || 'Unknown';
    const setName = (newName) => playerName = newName;
    const setWins = (winsTotal) => wins = winsTotal;
    return { getName, setName }
}
const player1 = playerFactory('Ahmed')
const player2 = playerFactory('Mohamed')

// Gameboard Module

const gameBoard = (() => {
    const boardMarks = ["", "", "", "", "", "", "", "", ""];


    const startGame = () => {
        turnMessage.innerHTML = `${player1.getName()}'s turn`
        gameBoardWrapper.addEventListener('click', updateState)
    }

    const updateState = (e) => {
        let target = parseInt(e.target.dataset.order);
        if (!e.target.innerText) {
            e.target.innerText = displayController.getMark().toUpperCase();

            // Update boardMarks array
            boardMarks[target] = displayController.getMark();

            if (winChecker()) {
                resultMessage.innerText = `${displayController.getTurn().getName()} Won`
                gameOver()
                return
            }
            else if (drawChecker()) {
                resultMessage.innerText = `Draw`
                gameOver()
                return
            }

            displayController.changeTurn();
        }
    }

    const winChecker = () => {

        // Row Check
        let start = 0;
        for (let end = 3; end <= boardMarks.length; end += 3) {
            let pattern = boardMarks.slice(start, end);
            if (pattern.every(mark => mark === displayController.getMark())) {
                return true;
            }
            start = end;
        }

        // column Check
        for (let i = 0; i < 3; i++) {
            let pattern = boardMarks.filter((mark, index) => [i, i + 3, i + 6].includes(index))
            if (pattern.every(mark => mark === displayController.getMark())) {
                return true;
            }
        }

        // Diagonal check
        for (let i = 0; i <= 2; i += 2) {
            let pattern = boardMarks.filter((mark, index) => [0, 4, 8].includes(index))
            if (i == 2) {
                pattern = boardMarks.filter((mark, index) => [2, 4, 6].includes(index))
            }
            if (pattern.every(mark => mark === displayController.getMark())) {
                return true;
            }
        }
        return false
    }

    const drawChecker = () => boardMarks.filter(mark => ['x', 'o'].includes(mark)).length === 9

    const gameOver = () => {
        gameBoardWrapper.removeEventListener('click', updateState)
        gameOverMessage.classList.add('show')
        playAgain.addEventListener('click', displayController.reset)
    }



    return { startGame, boardMarks };
})();

// Game displayer controller module

const displayController = (() => {
    let turn = player1;
    let mark = 'x';

    const getMark = () => mark;
    const getTurn = () => turn;

    const changeTurn = () => {
        turn = turn === player1 ? player2 : player1
        mark = mark === 'x' ? 'o' : 'x';
        turnMessage.innerText = `${turn.getName()} turn`
    }

    const reset = () => {
        gameOverMessage.classList.remove('show');
        for (let i = 0; i < gameBoard.boardMarks.length; i++) {
            gameBoard.boardMarks[i] = "";
        }
        Array.from(gameBoardWrapper.children).forEach(cell => {
            cell.textContent = "";
        });

        turn = player1;
        mark = 'x';

        gameBoard.startGame()
    }

    return { getMark, getTurn, changeTurn, reset }
})();






gameBoard.startGame();
