import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function NavButton({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.navButton}>{label}</Text>
    </TouchableOpacity>
  );
}

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  navButton: {
    fontSize: 20,
    marginVertical: 8,
    color: '#0d47a1',
  },
});
