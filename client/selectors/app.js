import _ from 'lodash';
import { store } from '../core/store';

const getGame = () => _.get(store.getState(), ['app', 'game']);
const getScore = () => _.get(store.getState(), ['app', 'score']);

export { getGame, getScore };
