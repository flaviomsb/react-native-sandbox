import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavButton from '../components/NavButton';

export default function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <NavButton label="FlatList Example" onPress={() => navigate('FlatList')} />
      <NavButton label="Component Composition" onPress={() => navigate('ImageList')} />
      <NavButton label="State Demo" onPress={() => navigate('Counter')} />
      <NavButton label="Input Validation Demo" onPress={() => navigate('InputValidation')} />
      <NavButton label="Layout Demo" onPress={() => navigate('Layout')} />
      <NavButton label="SVG Samples" onPress={() => navigate('Svg')} />
      <NavButton label="CRUD Example" onPress={() => navigate('Crud')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 16,
  },
});