import { setPlayer } from '../../../actions/sprites';

const createPlayer = spriteContext => {
	const player = spriteContext.physics.add.sprite(100, 450, 'dude');
	player.setBounce(0.2);
	player.setCollideWorldBounds(true);

	spriteContext.anims.create({
		key: 'left',
		frames: spriteContext.anims.generateFrameNumbers('dude', {
			start: 0,
			end: 3,
		}),
		frameRate: 10,
		repeat: -1,
	});

	spriteContext.anims.create({
		key: 'turn',
		frames: [{ key: 'dude', frame: 4 }],
		frameRate: 20,
	});

	spriteContext.anims.create({
		key: 'right',
		frames: spriteContext.anims.generateFrameNumbers('dude', {
			start: 5,
			end: 8,
		}),
		frameRate: 10,
		repeat: -1,
	});

	setPlayer(player);
};

export default createPlayer;
