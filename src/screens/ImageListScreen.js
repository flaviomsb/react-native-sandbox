import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

export default function ImageListScreen() {
  return (
    <View style={styles.container}>
      <ImageDetail title="Forest" source={require('../../assets/forest.jpg')} style={styles.image} />
      <ImageDetail title="Beach" source={require('../../assets/beach.jpg')} style={styles.image} />
      <ImageDetail title="Mountain" source={require('../../assets/mountain.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    paddingVertical: 12,
  },
});
