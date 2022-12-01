import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import ImageListScreen from './src/screens/ImageListScreen';
import CounterScreen from './src/screens/CounterScreen';
import InputValidationScreen from './src/screens/InputValidationScreen';
import LayoutScreen from './src/screens/LayoutScreen';
import BlogRoutes from './src/screens/blog/Routes';

import { name as appName } from './app.json';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ title: 'Sandbox' }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FlatList" component={FlatListScreen} />
          <Stack.Screen name="InputValidation" component={InputValidationScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
          <Stack.Screen name="ImageList" component={ImageListScreen} />
          <Stack.Screen name="Layout" component={LayoutScreen} />
          <Stack.Screen name="Crud" component={BlogRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
