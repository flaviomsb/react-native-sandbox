import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import ImageListScreen from './src/screens/ImageListScreen';
import CounterScreen from './src/screens/CounterScreen';
import InputValidationScreen from './src/screens/InputValidationScreen';
import LayoutScreen from './src/screens/LayoutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ title: 'Sandbox' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="InputValidation" component={InputValidationScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="ImageList" component={ImageListScreen} />
        <Stack.Screen name="Layout" component={LayoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
