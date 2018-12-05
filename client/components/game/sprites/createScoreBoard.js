import { setScoreBoard } from '../../../actions/sprites';
import { getScore } from '../../../selectors/app';

const createScoreBoard = spriteContext => {
	const scoreBoard = spriteContext.add.text(16, 16, `Score: ${getScore()}`, {
		fontSize: '32px',
		fill: '#000',
	});
	setScoreBoard(scoreBoard);
};

export { createScoreBoard };
