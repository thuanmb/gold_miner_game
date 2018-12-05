import {
	SET_PLAYER,
	SET_BOMBS,
	SET_STARS,
	SET_PLATFORMS,
	SET_SCORE_BOARD,
} from '../constants/ActionTypes';
import { store } from '../core/store';

const setPlatforms = platforms =>
	store.dispatch({ type: SET_PLATFORMS, platforms });
const setPlayer = player => store.dispatch({ type: SET_PLAYER, player });
const setBombs = bombs => store.dispatch({ type: SET_BOMBS, bombs });
const setStars = stars => store.dispatch({ type: SET_STARS, stars });
const setScoreBoard = scoreBoard =>
	store.dispatch({ type: SET_SCORE_BOARD, scoreBoard });

export { setPlayer, setBombs, setStars, setPlatforms, setScoreBoard };
