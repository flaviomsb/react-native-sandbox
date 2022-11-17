import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function HeaderIcon({ onPress, name }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Feather style={{ marginRight: 5, fontSize: 24 }} name={name} />
    </TouchableOpacity>
  );
}
