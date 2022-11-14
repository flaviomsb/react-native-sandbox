import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const types = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    default:
    case types.INCREASE:
      return { ...state, count: state.count + payload };
    case types.DECREASE:
      return { ...state, count: state.count - payload };
  }
}

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View style={styles.container}>
      <View style={styles.buttonBar}>
        <Button
          label="Increase +"
          color="#7fffd4"
          style={{ marginRight: 4 }}
          onPress={() => dispatch({ type: types.INCREASE, payload: 1 })}
        />
        <Button
          label="Decrease -"
          color="#ffb6c1"
          style={{ marginLeft: 4 }}
          onPress={() => dispatch({ type: types.DECREASE, payload: 1 })}
        />
      </View>
      <Text style={styles.counter}>{state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counter: {
    fontWeight: '700',
    fontSize: 65,
    marginTop: 20,
  },
});
