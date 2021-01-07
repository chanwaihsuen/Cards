import React, { useState } from 'react'
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'

import BottomSheet from 'reanimated-bottom-sheet'

export default function BottomSheetOptions({ sheetRef }) {
  const [isEnabledCaps, setIsEnabledCaps] = useState(false)
  const [isEnabledSmallCaps, setIsEnabledSmallCaps] = useState(false)
  const [isEnabledPicture, setIsEnabledPicture] = useState(false)
  const [isEnabledWord, setIsEnabledWord] = useState(false)

  const toggleCaps = () => setIsEnabledCaps((previousState) => !previousState)
  const toggleSmallCaps = () => setIsEnabledSmallCaps((previousState) => !previousState)
  const togglePicture = () => setIsEnabledPicture((previousState) => !previousState)
  const toggleWord = () => setIsEnabledWord((previousState) => !previousState)

  const StyledSwitch = ({ isEnabled, toggle }) => (
    <Switch
      trackColor={{ false: '#ffffff', true: '#266AEF' }}
      thumbColor={isEnabled ? '#ffffff' : '#266AEF'}
      // ios_backgroundColor="white"
      onValueChange={toggle}
      value={isEnabled}
    />
  )

  const saveHandler = () => {
    sheetRef.current.snapTo(1)
  }

  const renderContent = () => (
    <View style={styles.bottomSheet}>
      <Text style={styles.bottomSheetHeader}>Select the options</Text>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionHeader}>Caps</Text>
        <StyledSwitch isEnabled={isEnabledCaps} toggle={toggleCaps} />
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionHeader}>Small Caps</Text>
        <StyledSwitch isEnabled={isEnabledSmallCaps} toggle={toggleSmallCaps} />
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionHeader}>Picture</Text>
        <StyledSwitch isEnabled={isEnabledPicture} toggle={togglePicture} />
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.optionHeader}>Word</Text>
        <StyledSwitch isEnabled={isEnabledWord} toggle={toggleWord} />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={() => saveHandler()}>
        <Text style={styles.saveLabel}>Save</Text>
      </TouchableOpacity>
    </View>
  )

  return <BottomSheet ref={sheetRef} initialSnap={1} snapPoints={[460, 0]} borderRadius={10} renderContent={renderContent} />
}

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: 'white',
    padding: 32,
    height: 460,
  },
  bottomSheetHeader: {
    fontFamily: 'Campton-Light',
    textAlign: 'left',
    fontSize: 24,
    marginBottom: 32,
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  optionHeader: {
    fontFamily: 'Campton-Bold',
    textAlign: 'left',
    fontSize: 24,
  },
  saveButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 60,
    backgroundColor: '#266AEF',
    marginTop: 24,
  },
  saveLabel: {
    color: 'white',
    fontFamily: 'Campton-Bold',
    textAlign: 'center',
    fontSize: 18,
  },
})
