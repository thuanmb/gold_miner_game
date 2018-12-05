import { getScoreBoard, getStars } from '../../../selectors/sprites';
import { getScore } from '../../../selectors/app';
import { setScore } from '../../../actions/app';
import { createBomb } from '../sprites/createBombs';

const handleCollectStar = (player, star) => {
	const score = getScore();
	const scoreBoard = getScoreBoard();
	const stars = getStars();

	star.disableBody(true, true);

	const newScore = score + 10;
	setScore(newScore);
	scoreBoard.setText(`Score: ${newScore}`);

	if (stars.countActive(true) === 0) {
		stars.children.iterate(child => {
			child.enableBody(true, child.x, 0, true, true);
		});
		createBomb(player.x);
	}
};
export default handleCollectStar;
