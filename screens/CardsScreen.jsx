import React, { useEffect, useState } from 'react'
// import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import SafeAreaView from '../features/base/SafeAreaView'
import ScreenHeading from '../features/base/ScreenHeading'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions, Button, Image, Animated, PanResponder } from 'react-native'

const backgroundImage = { uri: require('../assets/background.png') }

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function CardsScreen() {
  const navigation = useNavigation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const [isSwitchOn, setIsSwitchOn] = React.useState(false)

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

  const generateCardPressed = () => {}

  const position = new Animated.ValueXY()

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}>
      <Text>Swipe down to close</Text>
    </View>
  )

  const sheetRef = React.useRef(null)

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy })
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 120) {
        Animated.spring(position, {
          toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          useNativeDriver: true,
        }).start(() => {
          setCurrentIndex(currentIndex + 1)
        })
      } else if (gestureState.dx < -120) {
        Animated.spring(position, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          useNativeDriver: true,
        }).start(() => {
          setCurrentIndex(currentIndex + 1)
        })
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 4,
        }).start()
      }
    },
  })

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  })
  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...position.getTranslateTransform(),
    ],
  }

  const nextCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  })
  const nextCardScale = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  })

  const Cards = [
    { id: '0', uri: require('../assets/0.png') },
    { id: '1', uri: require('../assets/1.png') },
    { id: '2', uri: require('../assets/2.png') },
    { id: '3', uri: require('../assets/3.png') },
    { id: '4', uri: require('../assets/4.png') },
  ]

  useEffect(() => {
    position.setValue({ x: 0, y: 0 })
  }, [currentIndex])

  const renderCards = () => {
    return Cards.map((item, i) => {
      if (i < currentIndex) {
        return null
      } else if (i == currentIndex) {
        return (
          <Animated.View
            {...panResponder.panHandlers}
            key={i}
            style={[
              rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 220,
                width: '100%',
                padding: 10,
                position: 'absolute',
              },
            ]}>
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: 'cover',
                borderRadius: 20,
              }}
              source={item.uri}
            />
          </Animated.View>
        )
      } else {
        return (
          <Animated.View
            key={i}
            style={[
              {
                opacity: nextCardOpacity,
                transform: [{ scale: nextCardScale }],
                height: SCREEN_HEIGHT - 220,
                width: '100%',
                padding: 10,
                position: 'absolute',
              },
            ]}>
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: 'cover',
                borderRadius: 20,
              }}
              source={item.uri}
            />
          </Animated.View>
        )
      }
    }).reverse()
  }

  return (
    <SafeAreaView>
      <Button title="Open Bottom Sheet" onPress={() => sheetRef.current.snapTo(0)} />

      <ImageBackground source={backgroundImage.uri} style={styles.backgroundImage} />
      <ScreenHeading>
        <TouchableOpacity style={[styles.touchBtn]} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </ScreenHeading>

      <View style={[styles.body]}>
        <View style={[styles.cardsContainer]}>{renderCards()}</View>
      </View>

      <BottomSheet ref={sheetRef} snapPoints={[450, 300, 0]} borderRadius={10} renderContent={renderContent} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    resizeMode: 'cover',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cardsContainer: {
    flex: 1,
  },
  close: {
    width: 32,
    height: 32,
  },
})
