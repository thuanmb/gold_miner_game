import Phaser from 'phaser';
import { setBombs } from '../../../actions/sprites';
import { getBombs } from '../../../selectors/sprites';

const createBombGroup = spriteContext => {
	const bombs = spriteContext.physics.add.group();
	setBombs(bombs);
};

const createBomb = playerX => {
	const bombs = getBombs();
	const x =
		playerX < 400
			? Phaser.Math.Between(400, 800)
			: Phaser.Math.Between(0, 400);

	const bomb = bombs.create(x, 16, 'bomb');
	bomb.setBounce(1);
	bomb.setCollideWorldBounds(true);
	bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
	bomb.allowGravity = false;
};

export { createBombGroup, createBomb };
