import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function LayoutScreen() {
  const [flexDirection, setFlexDirection] = useState('column');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');

  const renderLayoutOptions = useCallback((opts, selected, onChange) => {
    return opts.map((opt) => (
      <Button
        key={opt}
        label={opt}
        style={selected === opt ? styles.layoutButtonActive : {}}
        onPress={() => onChange(opt)}
      />
    ));
  });

  return (
    <View style={styles.root}>
      <View style={styles.layoutOptionsContainer}>
        <Text style={styles.layoutOptionsTitle}>Flex Direction</Text>
        <View style={styles.layoutOptions}>
          {renderLayoutOptions(['column', 'row'], flexDirection, setFlexDirection)}
        </View>
      </View>

      <View style={styles.layoutOptionsContainer}>
        <Text style={styles.layoutOptionsTitle}>Justify Content</Text>
        <View style={styles.layoutOptions}>
          {renderLayoutOptions(
            ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
            justifyContent,
            setJustifyContent
          )}
        </View>
      </View>

      <View style={styles.layoutOptionsContainer}>
        <Text style={styles.layoutOptionsTitle}>Align Items</Text>
        <View style={styles.layoutOptions}>
          {renderLayoutOptions(
            ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
            alignItems,
            setAlignItems
          )}
        </View>
      </View>
      <View style={[styles.container, { flexDirection, alignItems, justifyContent }]}>
        <View style={[styles.box, styles.blueBox]} />
        <View style={[styles.box, styles.orangeBox]} />
        <View style={[styles.box, styles.greenBox]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
  },
  container: {
    margin: 8,
    borderWidth: 1,
    borderColor: '#696969',
    borderRadius: 2,
    height: 250,
  },
  layoutOptionsContainer: {
    padding: 12,
  },
  layoutOptions: {
    flexDirection: 'row',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  layoutOptionsTitle: {
    fontWeight: '700',
    fontSize: 16,
  },
  layoutButtonActive: {
    backgroundColor: '#20b2aa',
  },
  box: {
    height: 50,
    width: 50,
  },
  blueBox: {
    backgroundColor: '#00bfff',
  },
  orangeBox: {
    backgroundColor: '#e9967a',
  },
  greenBox: {
    backgroundColor: '#3cb371',
  },
});
