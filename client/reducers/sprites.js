import {
	SET_PLAYER,
	SET_BOMBS,
	SET_STARS,
	SET_PLATFORMS,
	SET_SCORE_BOARD,
} from '../constants/ActionTypes';
import { SPRITES_INITIAL_STATE } from './initialState';

const spritesReducer = (state = SPRITES_INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_PLAYER:
			return {
				...state,
				player: action.player,
			};
		case SET_BOMBS:
			return {
				...state,
				bombs: action.bombs,
			};
		case SET_STARS:
			return {
				...state,
				stars: action.stars,
			};
		case SET_PLATFORMS:
			return {
				...state,
				platforms: action.platforms,
			};
		case SET_SCORE_BOARD:
			return {
				...state,
				scoreBoard: action.scoreBoard,
			};
		default:
			return state;
	}
};
export default spritesReducer;
