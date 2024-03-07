const GameBoard = (() => {
	const gameBoard = [
		["x", "o", "x"],
		["o", "x", "o"],
		["o", "x", "o"],
	];

	const getGameBoard = () => gameBoard;
	const addMark = (mark, place) => {
		if (place <= 2) {
			gameBoard[0][place] = mark;
		} else if (2 < place <= 5) {
			gameBoard[1][place - 3] = mark;
		} else {
			gameBoard[2][place - 6] = mark;
		}
	};

	return { getGameBoard, addMark };
})();

const playerFactory = (name, mark) => {
	const getName = () => name;
	const getMark = () => mark;
	return { getName, getMark };
};

const GameControls = (() => {
	let playerTurn = "playerOne";

	const playerOne = playerFactory("Ahmed", "x");
	const playerTwo = playerFactory("Mohamed", "o");

	const switchTurn = () => {
		if (playerTurn === "playerOne") {
			playerTurn = "playerTwo";
		} else {
			playerTurn = "playerOne";
		}
	};

	const isGameOver = (firstPlayer, secondPlayer) => {
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
			return `${firstPlayer.getName()} Won`;
		}
		if (
			(currentBoard[0][0] === "o" &&
				currentBoard[1][1] === "o" &&
				currentBoard[2][2] === "o") ||
			(currentBoard[0][2] === "o" &&
				currentBoard[1][1] === "o" &&
				currentBoard[2][0] === "o")
		) {
			return `${secondPlayer.getName()} Won`;
		}

		// Check For Full Row
		for (let row of currentBoard) {
			let playerOneFullRow = row.every((mark) => mark === "x");
			let PlayerTwoFullRow = row.every((mark) => mark === "o");
			if (playerOneFullRow) {
				return `${firstPlayer.getName()} Won`;
			} else if (PlayerTwoFullRow) {
				return `${secondPlayer.getName()} Won`;
			}
		}

		// Check for Full Column
		for (let i = 0; i < 3; i++) {
			let column = [];
			currentBoard.forEach((row) => column.push(row[i]));
			let playerOneFullColumn = column.every((mark) => mark === "x");
			let playerTwoFullColumn = column.every((mark) => mark === "o");
			if (playerOneFullColumn) {
				return `${firstPlayer.getName()} Won`;
			} else if (playerTwoFullColumn) {
				return `${secondPlayer.getName()} Won`;
			}
		}

		// Check for full board (Tie)
		let isFullBoard = !currentBoard.flat().includes(".");
		if (isFullBoard) {
			return `Tie`;
		}
	};

	const playRound = (place) => {
		if (playerTurn === "playerOne") {
			GameBoard.addMark(playerOne.getMark(), place);
		} else {
			GameBoard.addMark(playerTwo.getMark(), place);
		}
		isGameOver(playerOne, playerTwo);
		switchTurn();
	};

	const getPlayerTurn = () =>
		playerTurn === "playerOne" ? playerOne.getName() : playerTwo.getName();

	return { playRound, getPlayerTurn };
})();
