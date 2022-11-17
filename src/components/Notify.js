import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notify({ action }) {
  const [message, setMessage] = useState(null);
  const messages = {
    created: 'Blog created successfully!',
    deleted: 'Blog deleted!',
    updated: 'Blog changes saved',
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
    backgroundColor: '#7cfc00',
  },
  updated: {
    backgroundColor: '#87cefa',
  },
  deleted: {
    backgroundColor: '#f5deb3',
  },
  error: {
    backgroundColor: '#ffb6c1',
  },
});