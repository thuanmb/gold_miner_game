import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<div className="home">
		<h1>[title]</h1>
		<Link to="/game/new">New Game</Link>
	</div>
);

export default Home;
