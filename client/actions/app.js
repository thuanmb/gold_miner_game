import { SET_GAME, SET_SCORE } from '../constants/ActionTypes';
import { store } from '../core/store';

const setGame = game => store.dispatch({ type: SET_GAME, game });
const setScore = score => store.dispatch({ type: SET_SCORE, score });

export { setGame, setScore };
