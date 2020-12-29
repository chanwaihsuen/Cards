import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

export default function ScreenHeading({ sheetRef, ...otherProps }) {
  const navigation = useNavigation()

  return (
    <View style={[styles.header, { ...otherProps }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
        <Ionicons name="settings-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexShrink: 0,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
