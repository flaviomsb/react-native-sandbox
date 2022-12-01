import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Button
        icon='view-list'
        style={styles.navButton}
        mode='contained'
        onPress={() => navigate('FlatList')}
      >
        FlatList Example
      </Button>
      <Button
        icon='vector-combine'
        style={styles.navButton}
        mode='contained'
        onPress={() => navigate('ImageList')}
      >
        Component Composition
      </Button>
      <Button
        icon='state-machine'
        style={styles.navButton}
        mode='contained'
        onPress={() => navigate('Counter')}
      >
        State Demo
      </Button>
      <Button
        icon='form-textbox'
        style={styles.navButton}
        mode='contained'
        onPress={() => navigate('InputValidation')}
      >
        Input Validation Demo
      </Button>
      <Button
        icon='grid'
        style={styles.navButton}
        mode='contained'
        onPress={() => navigate('Layout')}
      >
        Layout Demo
      </Button>
      <Button
        icon='view-dashboard-edit'
        style={styles.navButton}
        mode='contained'
        onPress={() => navigate('Crud')}
      >
        CRUD Example
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  navButton: {
    marginVertical: 4,
  },
});
