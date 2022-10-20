import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

export default function User({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.name}>React Native Developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center',
  },
});

User.propTypes = {
  name: PropTypes.string.isRequired,
};
