const MESSAGE_SHOW = 'MESSAGE_SHOW'

// action creator
export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg});

export default (state='', action) => {

	switch(action.type) {
		case MESSAGE_SHOW:
			return action.payload;
		default:
			return state;
	}
};