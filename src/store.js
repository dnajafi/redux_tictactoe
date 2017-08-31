import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gameReducer } from './reducers/game';
import { messageReducer } from './reducers/messages';


const reducer = combineReducers({
	game: gameReducer,
	message: messageReducer
});


export default createStore(
	reducer,
	composeWithDevTools()
);