import _ from 'lodash';
import { store } from '../core/store';

const getPlayer = () => _.get(store.getState(), ['sprites', 'player']);
const getBombs = () => _.get(store.getState(), ['sprites', 'bombs']);
const getStars = () => _.get(store.getState(), ['sprites', 'stars']);
const getPlatforms = () => _.get(store.getState(), ['sprites', 'platforms']);
const getScoreBoard = () => _.get(store.getState(), ['sprites', 'scoreBoard']);

export { getPlayer, getBombs, getStars, getPlatforms, getScoreBoard };
