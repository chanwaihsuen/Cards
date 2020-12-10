import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function Button({ style, onPress, children, disabled, ...otherProps }) {
  return (
    <TouchableHighlight
      style={[style, styles.button, disabled ? styles.buttonDisabled : styles.buttonDefault]}
      underlayColor="#2f746f"
      onPress={onPress}
      disabled={disabled}
      {...otherProps}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDefault: {
    backgroundColor: '#20504C',
  },
  buttonDisabled: {
    backgroundColor: '#2f746f',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
