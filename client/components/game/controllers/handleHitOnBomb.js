const handleHitOnBomb = function(player) {
	this.physics.pause();
	player.setTint(0xff0000);
	player.anims.play('turn');
};

export default handleHitOnBomb;
