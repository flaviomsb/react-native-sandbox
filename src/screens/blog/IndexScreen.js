import React, { useContext, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../../context/BlogContext';
import Notify from '../../components/Notify';

export default function IndexScreen({ navigation: { navigate }, route }) {
  const { state, deletePost } = useContext(Context);
  const { action = null } = route.params || {};

  const renderRow = useCallback(({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigate('ShowBlog', { id: item.id })}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.actions}>
            <TouchableOpacity onPress={() => {
              navigate('UpdateBlog', { id: item.id });
            }}>
              <Feather style={styles.icon} name="edit" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              deletePost(item.id, () => navigate('Blogs', { action: 'deleted' }));
            }}>
              <Feather style={styles.icon} name="trash" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <Notify action={action} />
      <FlatList
        data={state}
        keyExtractor={({ title }) => title}
        renderItem={renderRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  actions: {
    flexDirection: 'row',
  },
  icon: {
    paddingHorizontal: 4,
    fontSize: 24,
  },
});
