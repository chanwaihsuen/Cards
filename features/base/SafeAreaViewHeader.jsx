import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * When `react-navigation` headers are shown, `react-native-safe-area-context`
 * adds a double padding. To workaround this we need to remove the top edge
 * whenever we have a screen with header shown
 */
export default function SafeAreaViewHeader({ style, ...otherProps }) {
  return (
    <SafeAreaView
      style={[styles.container, style]}
      edges={['right', 'left', 'bottom']}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});
