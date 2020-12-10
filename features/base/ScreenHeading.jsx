import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ScreenHeading({ style, children, ...otherProps }) {
  return (
    <View style={[styles.heading]} {...otherProps}>
      <Text style={[styles.headingText, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexShrink: 0,
    marginBottom: 16,
  },
  headingText: {
    fontSize: 36,
    lineHeight: 57,
  },
});
