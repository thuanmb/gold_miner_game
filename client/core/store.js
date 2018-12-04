import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import rootReducer from 'ReducersPath/root';

const history = createHistory();
const middlewares = [
	createLogger(),
	thunkMiddleware,
	routerMiddleware(history),
];
const combinedReducers = combineReducers({
	...rootReducer,
	routing: routerReducer,
});

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export { store, history };
