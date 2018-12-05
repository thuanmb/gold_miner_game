import { setPlatforms } from '../../../actions/sprites';

const createStaticSprites = spriteContext => {
	spriteContext.add.image(400, 300, 'sky');

	const platforms = spriteContext.physics.add.staticGroup();
	platforms
		.create(400, 568, 'ground')
		.setScale(2)
		.refreshBody();
	platforms.create(600, 400, 'ground');
	platforms.create(50, 250, 'ground');
	platforms.create(750, 220, 'ground');

	setPlatforms(platforms);
};

export default createStaticSprites;
