import React from 'react';
import { Pressable, Keyboard, StyleSheet } from 'react-native';

export default function KeyboardDismissArea({ children }) {
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
