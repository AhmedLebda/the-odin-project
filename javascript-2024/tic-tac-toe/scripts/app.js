"use strict";

const GameBoard = (() => {
	const gameBoard = [
		[".", "x", "."],
		["o", ".", "."],
		[".", "x", "."],
	];

	const getGameBoard = () => gameBoard;
	const resetGameBoard = () => {
		gameBoard.forEach((row, rowIndex) => {
			row.forEach((cell, cellIndex) => {
				gameBoard[rowIndex][cellIndex] = ".";
			});
		});
	};
	const addMark = (mark, place) => {
		if (place <= 2) {
			gameBoard[0][place] = mark;
		} else if (place > 2 && place <= 5) {
			gameBoard[1][place - 3] = mark;
		} else {
			gameBoard[2][place - 6] = mark;
		}
	};

	return { getGameBoard, addMark, resetGameBoard };
})();

const playerFactory = (name, mark) => {
	let score = 0;
	const getName = () => name;
	const setName = (newName) => (name = newName);
	const getMark = () => mark;
	const getScore = () => score;
	const updateScore = () => score++;
	const resetScore = () => (score = 0);
	return { getName, getMark, getScore, updateScore, resetScore, setName };
};

const playerOne = playerFactory("Player One", "x");
const playerTwo = playerFactory("Player Two", "o");

const GameControls = (() => {
	let playerTurn = "playerOne";

	const switchTurn = () => {
		if (playerTurn === "playerOne") {
			playerTurn = "playerTwo";
		} else {
			playerTurn = "playerOne";
		}
	};

	const resetTurn = () => (playerTurn = "playerOne");

	const isGameOver = () => {
		const currentBoard = GameBoard.getGameBoard();
		// Check for diagonal set
		if (
			(currentBoard[0][0] === "x" &&
				currentBoard[1][1] === "x" &&
				currentBoard[2][2] === "x") ||
			(currentBoard[0][2] === "x" &&
				currentBoard[1][1] === "x" &&
				currentBoard[2][0] === "x")
		) {
			playerOne.updateScore();
			return playerOne;
		}
		if (
			(currentBoard[0][0] === "o" &&
				currentBoard[1][1] === "o" &&
				currentBoard[2][2] === "o") ||
			(currentBoard[0][2] === "o" &&
				currentBoard[1][1] === "o" &&
				currentBoard[2][0] === "o")
		) {
			playerTwo.updateScore();
			return playerTwo;
		}

		// Check For Full Row
		for (let row of currentBoard) {
			let playerOneFullRow = row.every((mark) => mark === "x");
			let PlayerTwoFullRow = row.every((mark) => mark === "o");
			if (playerOneFullRow) {
				playerOne.updateScore();
				return playerOne;
			} else if (PlayerTwoFullRow) {
				playerTwo.updateScore();
				return playerTwo;
			}
		}

		// Check for Full Column
		for (let i = 0; i < 3; i++) {
			let column = [];
			currentBoard.forEach((row) => column.push(row[i]));
			let playerOneFullColumn = column.every((mark) => mark === "x");
			let playerTwoFullColumn = column.every((mark) => mark === "o");
			if (playerOneFullColumn) {
				playerOne.updateScore();
				return playerOne;
			} else if (playerTwoFullColumn) {
				playerTwo.updateScore();
				return playerTwo;
			}
		}

		// Check for full board (Tie)
		let isFullBoard = !currentBoard.flat().includes(".");
		if (isFullBoard) {
			return `It's a Tie`;
		}
	};

	const playRound = (place) => {
		if (playerTurn === "playerOne") {
			GameBoard.addMark(playerOne.getMark(), place);
		} else {
			GameBoard.addMark(playerTwo.getMark(), place);
		}
		switchTurn();
	};

	const getPlayerTurn = () =>
		playerTurn === "playerOne" ? playerOne.getName() : playerTwo.getName();

	return { playRound, isGameOver, getPlayerTurn, resetTurn };
})();

const UiControls = (() => {
	// UI Variables
	const uiBoard = document.querySelectorAll("#game-board > *");
	const gameStatus = document.querySelector("#game-status");
	const playerOneScore = document.querySelector("#player-one-score");
	const playerTwoScore = document.querySelector("#player-two-score");
	const restartBtn = document.querySelector("#restart");

	const updatePlayerTurn = () => {
		gameStatus.textContent = `${GameControls.getPlayerTurn()}'s Turn`;
	};
	const updateCellMark = (e) => {
		let targetPlace = +e.target.dataset.place;
		e.target.textContent = GameBoard.getGameBoard().flat()[targetPlace];
	};
	const resetCells = () => {
		uiBoard.forEach((cell) => (cell.textContent = ""));
	};

	const updateScores = () => {
		playerOneScore.textContent = playerOne.getScore();
		playerTwoScore.textContent = playerTwo.getScore();
	};

	const startGame = () => {
		updatePlayerTurn();

		uiBoard.forEach((cell) => {
			cell.addEventListener("click", clickCellHandler, { once: true });
		});

		restartBtn.addEventListener("click", restartGameHandler);
	};

	function clickCellHandler(e) {
		let clickedCell = +e.target.dataset.place;

		GameControls.playRound(clickedCell);
		updateCellMark(e);
		updatePlayerTurn();

		// Check for gameOver
		let winner = GameControls.isGameOver();
		if (winner) {
			uiBoard.forEach((cell) => {
				cell.removeEventListener("click", clickCellHandler);
			});
			gameStatus.textContent = `${winner.getName()} Won`;
			updateScores();
		}
	}
	function restartGameHandler() {
		GameBoard.resetGameBoard();
		GameControls.resetTurn();
		resetCells();
		startGame();
	}
	startGame();
})();
