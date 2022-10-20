import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import TexasCitiesListScreen from './src/screens/TexasCitiesListScreen';
import DevInfoScreen from './src/screens/DevInfoScreen';
import ImageListScreen from './src/screens/ImageListScreen';
import CounterScreen from './src/screens/CounterScreen';
import InputValidationScreen from './src/screens/InputValidationScreen';
import LayoutScreen from './src/screens/LayoutScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    TexasCitiesList: TexasCitiesListScreen,
    DevInfo: DevInfoScreen,
    ImageList: ImageListScreen,
    Counter: CounterScreen,
    InputValidation: InputValidationScreen,
    Layout: LayoutScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
