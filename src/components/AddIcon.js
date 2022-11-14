import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AddIcon({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Feather style={{ marginRight: 5, fontSize: 24 }} name="plus" />
    </TouchableOpacity>
  );
}
