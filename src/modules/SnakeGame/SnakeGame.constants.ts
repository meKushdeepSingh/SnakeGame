import {Dimensions} from 'react-native';

export const CELL_SIZE = 20;
export const GAME_AREA_WIDTH = Dimensions.get('window').width;
export const GAME_AREA_HEIGHT = Dimensions.get('window').height / 1.5;
export const COLS = Math.floor(GAME_AREA_WIDTH / CELL_SIZE);
export const ROWS = Math.floor(GAME_AREA_HEIGHT / CELL_SIZE);

export const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};
