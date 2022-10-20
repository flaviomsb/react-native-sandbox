import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavButton from '../components/NavButton';

export default function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <NavButton label="Texas Cities" onPress={() => navigate('TexasCitiesList')} />
      <NavButton label="Dev Info" onPress={() => navigate('DevInfo')} />
      <NavButton label="Image List" onPress={() => navigate('ImageList')} />
      <NavButton label="Counter Demo" onPress={() => navigate('Counter')} />
      <NavButton label="Input Validation Demo" onPress={() => navigate('InputValidation')} />
      <NavButton label="Layout Demo" onPress={() => navigate('Layout')} />
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