import {
	getPlayer,
	getPlatforms,
	getStars,
	getBombs,
} from '../../../selectors/sprites';
import handleCollectStar from './handleCollectStar';
import handleHitOnBomb from './handleHitOnBomb';

const handleCollision = spriteContext => {
	const player = getPlayer();
	const platforms = getPlatforms();
	const stars = getStars();
	const bombs = getBombs();
	spriteContext.physics.add.collider(player, platforms);
	spriteContext.physics.add.collider(stars, platforms);
	spriteContext.physics.add.overlap(
		player,
		stars,
		handleCollectStar,
		null,
		spriteContext
	);
	spriteContext.physics.add.collider(bombs, platforms);
	spriteContext.physics.add.collider(
		player,
		bombs,
		handleHitOnBomb,
		null,
		spriteContext
	);
};

export { handleCollision };
