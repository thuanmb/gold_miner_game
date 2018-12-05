import Phaser from 'phaser';
import { setStars } from '../../../actions/sprites';

const createStars = spriteContext => {
	const stars = spriteContext.physics.add.group({
		key: 'star',
		repeat: 11,
		setXY: { x: 12, y: 0, stepX: 70 },
	});

	stars.children.iterate(child => {
		child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
	});

	setStars(stars);
};

export default createStars;
