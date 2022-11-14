import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../../context/BlogContext';

export default function ShowScreen({ route, navigation }) {
  const { id }= route.params;
  const { state } = useContext(Context);

  const { title = null } = state.find(({ id: blogId }) => blogId === id);

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
