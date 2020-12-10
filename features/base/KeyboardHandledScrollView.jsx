import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import KeyboardAvoidingView from './KeyboardAvoidingView';
import KeyboardDismissArea from './KeyboardDismissArea';

export default function KeyboardHandledScrollView({ children }) {
  return (
    <KeyboardAvoidingView>
      <KeyboardDismissArea>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.contentContainer}>
          {children}
        </ScrollView>
      </KeyboardDismissArea>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
});
