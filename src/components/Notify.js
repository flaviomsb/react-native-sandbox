import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notify({ action }) {
  const [message, setMessage] = useState(null);
  const messages = {
    created: 'Blog created successfully!',
    deleted: 'Blog deleted!',
    edited: 'Blog changes saved',
    error: 'An error has occurred. Please try again.'
  };

  useEffect(() => {
    setMessage(messages[action]);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }, [action]);

  if (!message) return null;

  return (
    <View style={[styles.notification, styles[action]]}>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notification: {
    margin: 8,
    padding: 16,
    alignItems: 'center',
  },
  created: {
    backgroundColor: '#add8e6',
  },
  edited: {
    backgroundColor: '#7fffd4',
  },
  deleted: {
    backgroundColor: '#ffb6c1',
  },
  error: {
    backgroundColor: '#ffb6c1',
  },
});