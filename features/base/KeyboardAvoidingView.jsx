import { useHeaderHeight } from '@react-navigation/stack';
import React from 'react';
import { KeyboardAvoidingView as DefaultKeyboardAvoidingView, Platform } from 'react-native';

export default function KeyboardAvoidingView({ children, ...otherProps }) {
  const headerHeight = useHeaderHeight();

  return (
    <DefaultKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={headerHeight}
      {...otherProps}>
      {children}
    </DefaultKeyboardAvoidingView>
  );
}
