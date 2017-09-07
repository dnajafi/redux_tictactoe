import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import gameReducer from './reducers/game';
import messageReducer from './reducers/messages';
import addPlayersReducer from './reducers/addPlayers';

/*
	Everything that is related to the game that is handled by the game reducer 
	will be accessible through state.game
*/
const reducer = combineReducers({
	game: gameReducer,
	message: messageReducer,
	addPlayers: addPlayersReducer
});

export default createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);