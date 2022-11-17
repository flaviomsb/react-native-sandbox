import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Button from './Button';

export default function BlogForm({ onSubmit, initialValues }) {
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
          maxLength={500}
          editable
          multiline
        />
        {submitted && !content && <Text style={styles.errorMessage}>Content is required</Text>}
      </View>

      <Button
        label="Save"
        color="#b0e0e6"
        onPress={() => {
          setSubmitted(true);
          if (!title || !content) return;
          onSubmit({ title, content });
        }}
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
    minHeight: 150,
    maxHeight: 350,
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

BlogForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

BlogForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};
