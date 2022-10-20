import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default function List({ rows }) {
  return (
    <View>
      <FlatList
        data={rows}
        keyExtractor={({ name }) => name}
        renderItem={({ item: { name }}) => <Text style={styles.text}>{name}</Text>}
        showsVerticalScrollIndicator={false}
        scrollEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

List.defaultProps = {
  rows: [],
};

List.propTypes = {
  rows: PropTypes.array,
};
