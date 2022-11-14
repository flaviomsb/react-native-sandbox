import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Blogs from './IndexScreen';
import ShowBlog from './ShowScreen';
import CreateBlog from './CreateScreen';

import { Provider as BlogProvider } from '../../context/BlogContext';
import AddIcon from '../../components/AddIcon';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <Stack.Navigator initialRouteName="Blogs" screenOptions={{ title: 'Blogs' }}>
          <Stack.Screen
            name="Blogs"
            component={Blogs}
            options={({ navigation: { navigate } }) => ({
              headerRight: () => (
                <AddIcon onPress={() => navigate('CreateBlog')} />
              ),
            })}
          />
          <Stack.Screen name="ShowBlog" component={ShowBlog} />
          <Stack.Screen name="CreateBlog" component={CreateBlog} />
      </Stack.Navigator>
    </BlogProvider>
  );
};