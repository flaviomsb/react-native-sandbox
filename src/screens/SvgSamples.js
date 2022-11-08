import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AirplaneIcon from '../components/AirplaneIcon';
import DashboardIcon from '../components/DashboardIcon';
import AccountCircleIcon from '../components/AccountCircleIcon';

export default function SvgSamples() {
  return (
    <View style={styles.view}>
      <View style={styles.iconContainer}>
        <DashboardIcon />
        <Text style={styles.iconLabel}>SvgXml with xml strings</Text>
      </View>
      <View style={styles.iconContainer}>
        <AccountCircleIcon />
        <Text style={styles.iconLabel}>SvgXml with svg as xml source</Text>
      </View>
      <View style={styles.iconContainer}>
        <AirplaneIcon width={64} height={64} />
        <Text style={styles.iconLabel}>SVG component</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 16,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 25,
  }
});
