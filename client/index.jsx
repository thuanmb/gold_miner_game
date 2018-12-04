import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import Game from './components/main/Game';
import Home from './components/main/Home';
import { history, store } from './core/store';
import './styles/main.scss';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Fragment>
				<Route exact path="/" component={Home} />
				<Route path="/game/new" component={Game} />
			</Fragment>
		</Router>
	</Provider>,
	document.getElementById('app-container')
);
