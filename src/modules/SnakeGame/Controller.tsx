import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Direction} from './SnakeGame.constants';
import {colors} from '../../constants';

export type ControllerProps = {
  setDirection: (direction: string) => void;
};

const Controller: FC<ControllerProps> = ({setDirection}) => {
  return (
    <View style={styles.controls}>
      <TouchableOpacity
        style={styles.controlButton}
        onPress={() => setDirection(Direction.UP)}>
        <Text style={styles.controlText}>↑</Text>
      </TouchableOpacity>
      <View style={styles.horizontalControls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => setDirection(Direction.LEFT)}>
          <Text style={styles.controlText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => setDirection(Direction.RIGHT)}>
          <Text style={styles.controlText}>→</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.controlButton}
        onPress={() => setDirection(Direction.DOWN)}>
        <Text style={styles.controlText}>↓</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Controller};

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginVertical: 10,
  },
  controlButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.gray,
    opacity: 0.5,
  },
  controlText: {
    fontSize: 32,
    color: colors.white,
    textAlign: 'center',
  },
});
