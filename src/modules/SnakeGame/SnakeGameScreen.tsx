import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {getRandomFoodPosition} from './SnakeGame.utils';
import {
  CELL_SIZE,
  COLS,
  Direction,
  GAME_AREA_HEIGHT,
  GAME_AREA_WIDTH,
  ROWS,
} from './SnakeGame.constants';
import {Controller} from './Controller';
import {colors} from '../../constants';

const SnakeGameScreen = () => {
  const [snake, setSnake] = useState([[5, 5]]);
  const [food, setFood] = useState(getRandomFoodPosition());
  const [direction, setDirection] = useState(Direction.RIGHT);
  const [isGameOver, setIsGameOver] = useState(false);
  const moveRef = useRef<string>(Direction.RIGHT);

  moveRef.current = direction;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGameOver) {
        moveSnake();
      }
    }, 200);
    return () => clearInterval(interval);
  }, [snake, direction, isGameOver]);

  const moveSnake = () => {
    const head = snake[0];
    let newHead: any;

    switch (moveRef.current) {
      case Direction.UP:
        newHead = [head[0], head[1] - 1];
        break;
      case Direction.DOWN:
        newHead = [head[0], head[1] + 1];
        break;
      case Direction.LEFT:
        newHead = [head[0] - 1, head[1]];
        break;
      case Direction.RIGHT:
        newHead = [head[0] + 1, head[1]];
        break;
    }

    if (
      newHead[0] < 0 ||
      newHead[1] < 0 ||
      newHead[0] >= COLS ||
      newHead[1] >= ROWS ||
      snake.some(
        segment => segment[0] === newHead[0] && segment[1] === newHead[1],
      )
    ) {
      setIsGameOver(true);
      Alert.alert('Game Over', 'Try Again', [
        {text: 'Restart', onPress: restartGame},
      ]);
      return;
    }

    const newSnake = [newHead, ...snake];
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood(getRandomFoodPosition());
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const restartGame = () => {
    setSnake([[5, 5]]);
    setFood(getRandomFoodPosition());
    setDirection(Direction.RIGHT);
    setIsGameOver(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.gameArea}>
        {snake.map((segment, index) => (
          <View
            key={index}
            style={[
              styles.snake,
              {
                left: segment[0] * CELL_SIZE,
                top: segment[1] * CELL_SIZE,
              },
            ]}
          />
        ))}
        <View
          style={[
            styles.food,
            {
              left: food[0] * CELL_SIZE,
              top: food[1] * CELL_SIZE,
            },
          ]}
        />
      </View>
      <Controller setDirection={setDirection} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameArea: {
    height: GAME_AREA_HEIGHT,
    width: GAME_AREA_WIDTH,
    borderWidth: 2,
    borderColor: colors.border,
  },
  snake: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: colors.snake,
    position: 'absolute',
    borderRadius: 5,
  },
  food: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: colors.food,
    position: 'absolute',
    borderRadius: CELL_SIZE / 2,
  },
});

export {SnakeGameScreen};
