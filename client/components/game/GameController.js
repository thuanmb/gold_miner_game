import handlePlayerMove from './controllers/handlePlayerMove';

const GameController = () =>
	function() {
		handlePlayerMove(this);
	};
export default GameController;
