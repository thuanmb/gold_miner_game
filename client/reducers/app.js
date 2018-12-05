import { SET_GAME, SET_SCORE } from '../constants/ActionTypes';
import { APP_INITIAL_STATE } from './initialState';

const appReducer = (state = APP_INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_GAME:
			return {
				...state,
				game: action.game,
			};
		case SET_SCORE:
			return {
				...state,
				score: action.score,
			};
		default:
			return state;
	}
};
export default appReducer;
