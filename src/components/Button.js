import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({ label, color, onPress, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  color: '#c0c0c0',
  style: {},
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 12,
    margin: 6,
  },
});
