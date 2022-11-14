import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native';
import { Context } from '../../context/BlogContext';
import Button from '../../components/Button';

export default function CreateScreen({ navigation: { navigate } }) {
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(Context);

  const saveNewEntry = () => {
    setSubmitted(true);
    if (!title || !content) return;
    addPost({ title, content });
    navigate('Blogs', { action: 'created' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldSet}>
        <Text style={styles.inputLabel}>Title:</Text>
        <TextInput
          style={[styles.input, submitted && !title && styles.errorInput]}
          autoCapitalize="words"
          value={title}
          onChangeText={(newValue) => setTitle(newValue)}
          editable
        />
        {submitted && !title && <Text style={styles.errorMessage}>Title is required</Text>}
      </View>

      <View style={styles.fieldSet}>
        <Text style={styles.inputLabel}>Content:</Text>
        <TextInput
          style={[styles.input, styles.contentField, submitted && !content && styles.errorInput]}
          value={content}
          onChangeText={(newValue) => setContent(newValue)}
          numberOfLines={5}
          maxLength={350}
          editable
          multiline
        />
        {submitted && !content && <Text style={styles.errorMessage}>Content is required</Text>}
      </View>

      <Button
        label="Save"
        color="#b0e0e6"
        onPress={saveNewEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  fieldSet: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 12,
  },
  input: {
    fontSize: 16,
    padding: 12,
    borderRadius: 4,
    borderColor: '#696969',
    borderWidth: 1,
  },
  contentField: {
    minHeight: 100,
    maxHeight: 250,
  },
  errorMessage: {
    color: '#b22222',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 12,
  },
  errorInput: {
    borderColor: '#b22222',
  },
});
