import { getPlayer } from '../../../selectors/sprites';

const handlePlayerMove = gameContext => {
	const cursors = gameContext.input.keyboard.createCursorKeys();
	const player = getPlayer();
	if (!player) {
		return;
	}
	if (cursors.left.isDown) {
		player.setVelocityX(-160);

		player.anims.play('left', true);
	} else if (cursors.right.isDown) {
		player.setVelocityX(160);

		player.anims.play('right', true);
	} else {
		player.setVelocityX(0);

		player.anims.play('turn');
	}

	if (cursors.up.isDown && player.body.touching.down) {
		player.setVelocityY(-330);
	}
};

export default handlePlayerMove;
