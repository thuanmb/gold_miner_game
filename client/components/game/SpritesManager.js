import createStaticSprites from './sprites/createStaticSprites';
import createPlayer from './sprites/createPlayer';
import createStars from './sprites/createStars';
import { createBombGroup } from './sprites/createBombs';
import { createScoreBoard } from './sprites/createScoreBoard';
import { handleCollision } from './controllers/handleCollision';

const SpritesManager = () =>
	function() {
		createStaticSprites(this);
		createPlayer(this);
		createStars(this);
		createBombGroup(this);
		createScoreBoard(this);
		handleCollision(this);
	};

export default SpritesManager;
