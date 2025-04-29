import {COLS, ROWS} from './SnakeGame.constants';

export const getRandomFoodPosition = () => {
  return [Math.floor(Math.random() * COLS), Math.floor(Math.random() * ROWS)];
};
