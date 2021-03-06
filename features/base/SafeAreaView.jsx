import { SafeAreaView as DefaultSafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function SafeAreaView({ style, ...otherProps }) {
  return <DefaultSafeAreaView style={[styles.container, style]} {...otherProps} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
})
