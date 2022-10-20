import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';

export default function ImageDetail({ title, source, style }) {
  return (
    <View style={style}>
      <Image source={source} />
      <Text>{title}</Text>
    </View>
  );
}

ImageDetail.defaultProps = {
  style: {},
};

ImageDetail.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.number.isRequired,
  style: PropTypes.object,
};
