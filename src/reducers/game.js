// import { showMessage } from './messages';

// const initState = {
// 	players: [],
// 	currentPlayerNum: 1,
// 	currentPlayerName: '',
// 	startGame: false
// };

// const PLAYER_ADD = 'PLAYER_ADD';
// const PLAYER_NAME_UPDATE = 'PLAYER_NAME_UPDATE';
// const PLAYER_NUM_UPDATE = 'PLAYER_NUM_UPDATE';
// const START_GAME = 'START_GAME';

// // action creators
// export const addPlayer = (name) => ({ type: PLAYER_ADD, payload: name });
// export const updatePlayerName = (playerName) => ({ type: PLAYER_NAME_UPDATE, payload: playerName });
// export const updatePlayerNum = (playerNum) => ({ type: PLAYER_NUM_UPDATE, payload: playerNum });

// export const addPlayers = (playerNum) => {
// 	return (dispatch) => {
// 		dispatch(showMessage('Enter Name of Player ' + playerNum))
// 	};
// };

// export const savePlayer = (name, playerNum, playersLength) => {
// 	return (dispatch) => {
// 		dispatch(showMessage('Saving Player'));
// 		dispatch(addPlayer(name));
// 		(playersLength+1) <= 1 ? 
// 			dispatch(showMessage('Enter Name of Player ' + playerNum))
// 		:
// 			dispatch(showMessage('Time to start game'));
// 	}
// };

// export const updateCurrentPlayerName = (playerName) => {
// 	return (dispatch) => {
// 		dispatch(updatePlayerName(playerName));
// 	};
// };

// export const updateCurrentPlayerNum = (playerNum) => {
// 	return (dispatch) => {
// 		dispatch(updatePlayerNum(playerNum));
// 	};
// };

// export const startGame = (bool) => {
// 	return (dispatch) => {
// 		dispatch({ type: START_GAME, payload: bool });
// 	}
// };

// export default (state = initState, action) => {
// 	switch(action.type) {
// 		case PLAYER_ADD:
// 			return { ...state, currentPlayerName: '', players: state.players.concat(action.payload) }
// 		case PLAYER_NAME_UPDATE:
// 			return { ...state, currentPlayerName: action.payload }
// 		case PLAYER_NUM_UPDATE:
// 			return { ...state, currentPlayerNum: action.payload }
// 		case START_GAME:
// 			return { ...state, startGame: action.payload }
// 		default:
// 			return state;
// 	}
// };