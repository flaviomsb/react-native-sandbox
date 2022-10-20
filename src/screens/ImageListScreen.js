import React from 'react';
import { View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

export default function ImageListScreen() {
  return (
    <View>
      <ImageDetail title="Forest" source={require('../../assets/forest.jpg')} />
      <ImageDetail title="Beach" source={require('../../assets/beach.jpg')} />
      <ImageDetail title="Mountain" source={require('../../assets/mountain.jpg')} />
    </View>
  );
}
