import Phaser from 'phaser';

const GAME_CONFIG = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: false,
		},
	},
};

export { GAME_CONFIG };
