import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useBlog from '../../hooks/useBlog';

export default function ShowScreen({ route }) {
  const { id }= route.params;
  const { title, content } = useBlog(id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    marginHorizontal: 6,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  content: {
    marginHorizontal: 6,
    fontSize: 18,
  },
});
