import React from 'react';
import { TextInput as DefaultTextInput, StyleSheet } from 'react-native';

export default function TextInput({ style, ...otherProps }) {
  return <DefaultTextInput style={[styles.input, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: '#eee',
    paddingHorizontal: 10,
  },
});
