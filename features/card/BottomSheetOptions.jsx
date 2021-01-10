import { Dimensions, StyleSheet, Switch, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { setCaps, setPicture, setSmallCaps, setWord } from '../settings/settingsSlice'
import { useDispatch, useSelector } from 'react-redux'

import BottomSheet from 'reanimated-bottom-sheet'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function BottomSheetOptions({ sheetRef }) {
  const dispatch = useDispatch()
  const useCaps = useSelector((state) => state.caps)
  const smallCaps = useSelector((state) => state.caps)

  const [isEnabledCaps, setIsEnabledCaps] = useState(useCaps)
  const [isEnabledSmallCaps, setIsEnabledSmallCaps] = useState(smallCaps)
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
    dispatch(setCaps(isEnabledCaps))
    dispatch(setSmallCaps(isEnabledSmallCaps))
    dispatch(setPicture(isEnabledPicture))
    dispatch(setWord(isEnabledWord))
    sheetRef.current.snapTo(1)
  }

  const dismissBottomSheet = () => {
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

  return (
    <TouchableWithoutFeedback onPress={() => dismissBottomSheet()}>
      <BottomSheet ref={sheetRef} initialSnap={1} snapPoints={[460, 0]} borderRadius={10} renderContent={renderContent} />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  pressable: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    top: -600,
    backgroundColor: 'red',
  },
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
