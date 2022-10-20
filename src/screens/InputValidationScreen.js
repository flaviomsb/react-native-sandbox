import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function InputValidationScreen() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={(newValue) => setValue(newValue)}
      />
      {value.length < 5 && <Text style={styles.errorMessage}>Name has less than 5 characters</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 12,
  },
  input: {
    fontSize: 16,
    padding: 12,
    borderRadius: 4,
    borderColor: '#696969',
    borderWidth: 1,
  },
  errorMessage: {
    color: '#b22222',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 12,
  },
});
