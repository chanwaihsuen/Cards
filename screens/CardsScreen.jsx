import React, { useEffect, useState } from 'react'
import SafeAreaView from '../features/base/SafeAreaView'
import ScreenHeading from '../features/base/ScreenHeading'
import BottomSheetOptions from '../features/card/BottomSheetOptions'
import { StyleSheet, View, ImageBackground, Text, Switch, Dimensions, Button, Image, Animated, PanResponder } from 'react-native'

import Card from '../features/card/Card'

const backgroundImage = { uri: require('../assets/background.png') }

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function CardsScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sheetRef = React.useRef(null)

  const position = new Animated.ValueXY()

  const Cards = [
    { id: '0', uri: require('../assets/cards/b.png') },
    { id: '1', uri: require('../assets/cards/e.png') },
    { id: '2', uri: require('../assets/cards/m.png') },
    { id: '3', uri: require('../assets/cards/p.png') },
  ]

  useEffect(() => {
    position.setValue({ x: 0, y: 0 })
  }, [currentIndex])

  const panResponserReleaseStart = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const renderCards = () => {
    return Cards.map((item, i) => {
      if (i < currentIndex) {
        return null
      } else if (i == currentIndex) {
        return <Card key={i} isTopCard={true} index={i} item={item} position={position} panResponserReleaseStart={panResponserReleaseStart} />
      } else {
        return <Card key={i} isTopCard={false} index={i} item={item} position={position} />
      }
    }).reverse()
  }

  return (
    <React.Fragment>
      <SafeAreaView>
        <ImageBackground source={backgroundImage.uri} style={styles.backgroundImage} />
        <ScreenHeading sheetRef={sheetRef} />
        <View style={[styles.cardsContainer]}>{renderCards()}</View>
      </SafeAreaView>
      <BottomSheetOptions sheetRef={sheetRef} />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    resizeMode: 'cover',
  },
  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})
