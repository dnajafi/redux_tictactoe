import { showMessage } from './messages';
import { setUpNewGame } from './game'; 

const initState = {
	players: [],
	currentPlayerNum: 1,
	currentPlayerName: '',
	startGame: false
};

const PLAYER_ADD = 'PLAYER_ADD';
const PLAYER_NAME_UPDATE = 'PLAYER_NAME_UPDATE';
const PLAYER_NUM_UPDATE = 'PLAYER_NUM_UPDATE';
const START_GAME = 'START_GAME';
const START_NEW_GAME = 'START_NEW_GAME';

// action creators
export const addPlayer = (name) => ({ type: PLAYER_ADD, payload: name });
export const updatePlayerName = (playerName) => ({ type: PLAYER_NAME_UPDATE, payload: playerName });
export const updatePlayerNum = (playerNum) => ({ type: PLAYER_NUM_UPDATE, payload: playerNum });

export const addPlayers = (playerNum) => {
	return (dispatch) => {
		let symbol = playerNum === 1 ? ' (X)' : ' (O)';

		dispatch(showMessage('Enter Name of Player ' + playerNum + symbol))
	};
};

export const savePlayer = (name, playerNum, playersLength) => {
	return (dispatch) => {
		let symbol = playerNum === 1 ? ' (X)' : ' (O)';
		dispatch(showMessage('Saving Player'));
		dispatch(addPlayer(name));
		(playersLength+1) <= 1 ? 
			dispatch(showMessage('Enter Name of Player ' + playerNum + symbol))
		:
			dispatch(showMessage('Time to start game. Please press Start below.'));
	}
};

export const updateCurrentPlayerName = (playerName) => {
	return (dispatch) => {
		dispatch(updatePlayerName(playerName));
	};
};

export const updateCurrentPlayerNum = (playerNum) => {
	return (dispatch) => {
		dispatch(updatePlayerNum(playerNum));
	};
};

export const startGame = (bool) => {
	return (dispatch) => {
		dispatch({ type: START_GAME, payload: bool });
	}
};

export const startNewGame = () => {
	return (dispatch) => {
		dispatch({ type: START_NEW_GAME });
		setUpNewGame(dispatch);
	}
};

export default (state = initState, action) => {
	switch(action.type) {
		case PLAYER_ADD:
			return { ...state, currentPlayerName: '', players: state.players.concat(action.payload) };
		case PLAYER_NAME_UPDATE:
			return { ...state, currentPlayerName: action.payload };
		case PLAYER_NUM_UPDATE:
			return { ...state, currentPlayerNum: action.payload };
		case START_GAME:
			return { ...state, startGame: action.payload };
		case START_NEW_GAME:
			return initState;
		default:
			return state;
	}
};