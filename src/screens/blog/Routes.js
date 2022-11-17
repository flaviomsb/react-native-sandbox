import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Blogs from './IndexScreen';
import ShowBlog from './ShowScreen';
import CreateBlog from './CreateScreen';
import UpdateBlog from './UpdateScreen';

import { Provider as BlogProvider } from '../../context/BlogContext';
import HeaderIcon from '../../components/HeaderIcon';

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
                <HeaderIcon name="plus" onPress={() => navigate('CreateBlog')} />
              ),
            })}
          />
          <Stack.Screen
            name="ShowBlog"
            component={ShowBlog}
            options={({ navigation: { navigate }, route }) => ({
              headerRight: () => (
                <HeaderIcon name="edit" onPress={() => navigate('UpdateBlog', { id: route.params?.id })} />
              ),
            })}
          />
          <Stack.Screen name="CreateBlog" component={CreateBlog} />
          <Stack.Screen name="UpdateBlog" component={UpdateBlog} />
      </Stack.Navigator>
    </BlogProvider>
  );
};