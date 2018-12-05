import React from 'react';
import { Link } from 'react-router-dom';
import MainApp from '../game/MainApp';

const Home = () => (
	<div className="home">
		<h1>Gold Miner</h1>
		<Link to="/game/new">New Game</Link>
		<MainApp />
	</div>
);

export default Home;
