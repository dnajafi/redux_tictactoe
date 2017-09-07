import { showMessage } from './messages';

const initState = {
	board: [['','',''], ['', '', ''], ['', '', '']],
	playerSymbols: {
		0: 'X',
		1: 'O'
	},
	currentPlayer: 1,
	gameOver: false,
	moveCount: 0
};

const UPDATE_BOARD = 'UPDATE_BOARD';
const GAME_OVER = 'GAME_OVER';
const CHANGE_PLAYER = 'CHANGE_PLAYER';
const INCREASE_MOVE_COUNT = 'INCREASE_MOVE_COUNT';
const SET_UP_NEW_GAME = 'SET_UP_NEW_GAME';

const updatePosition = (row, column, currBoard) => ({ type: UPDATE_BOARD, payload: {row: row, column: column, board: currBoard} });
const gameOver = () => ({ type: GAME_OVER });
const changePlayer = () => ({ type: CHANGE_PLAYER });
const increaseMoveCount = () => ({ type: INCREASE_MOVE_COUNT });

const verifyWin = (board) => {
	// check diagonals
	if(board[0][0] === board[1][1] &&  board[1][1] === board[2][2] && board[0][0] !== '') {
		return true;
	} else if(board[2][0] === board[1][1] && board[1][1] === board[0][2] & board[2][0] !== '') {
		return true;
	}

	// check columns
	for(let i=0; i<3; i++) {
		if(board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
			return true;
		}
	}

	//check rows
	for(let i=0; i<3; i++) {
		if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
			return true;
		}
	}

	return false;
};

export const takeTurn = (row, column, currBoard, currPlayerSymbol, currPlayerName) => {
	return (dispatch) => {
		if(currBoard[row][column] === '') {
			currBoard[row][column] = currPlayerSymbol;
			dispatch(updatePosition(row, column, currBoard));
			let win = verifyWin(currBoard);

			if(!win) {
		 		dispatch(changePlayer());
				dispatch(increaseMoveCount());
			} else {
				dispatch(showMessage(currPlayerName + ' Wins!'));
				dispatch(gameOver());
			}
		} else {
			dispatch(showMessage('That Spot is Already Taken. Please choose another.'));
		}
	};
};

export const updatePlayer = () => {
	return (dispatch) => {
		dispatch(changePlayer());
	};
};

export const updateMessage = (currPlayerName) => {
	return (dispatch) => {
		dispatch(showMessage('It is your turn ' + currPlayerName + '.'));
	};
};

export const staleMate = () => {
	return (dispatch) => {
		dispatch(showMessage('Stalemate. Nobody wins!'));
		dispatch(gameOver());
	};
};

export const gameIsOver = () => {
	return (dispatch) => {
		dispatch(gameOver());
		dispatch(showMessage('GAME IS OVER!'));
	};
};

export const setUpNewGame = (dispatch) => {
	dispatch({ type: SET_UP_NEW_GAME });
};

export default (state = initState, action) => {
	switch(action.type) {
		case UPDATE_BOARD:
			return { ...state, board: action.payload.board };
		case GAME_OVER:
			return { ...state, gameOver: true };
		case CHANGE_PLAYER:
			let nextPlayer = state.currentPlayer === 1 ? 2 : 1;
			return { ...state, currentPlayer: nextPlayer };
		case INCREASE_MOVE_COUNT:
			let newMoveCount = state.moveCount + 1;
			return { ...state, moveCount: newMoveCount };		
		case SET_UP_NEW_GAME:
			return  { board: [['','',''], ['', '', ''], ['', '', '']], playerSymbols: { 0: 'X', 1: 'O' }, currentPlayer: 1, gameOver: false, moveCount: 0 };
		default:
			return state;
	}

};
