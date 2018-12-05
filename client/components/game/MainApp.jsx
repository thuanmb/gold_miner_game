import { PureComponent } from 'react';
import Phaser from 'phaser';
import { setGame } from '../../actions/app';
import { GAME_CONFIG } from './constants';
import AssetsLoader from './AssetsLoader';
import GameController from './GameController';
import SpritesManager from './SpritesManager';

class MainApp extends PureComponent {
	componentDidMount() {
		const game = new Phaser.Game({
			...GAME_CONFIG,
			scene: {
				preload: AssetsLoader(),
				create: SpritesManager(),
				update: GameController(),
			},
		});
		setGame(game);
	}

	render() {
		return null;
	}
}

export default MainApp;
