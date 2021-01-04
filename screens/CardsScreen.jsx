import { Animated, Button, Dimensions, Image, ImageBackground, PanResponder, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import BottomSheetOptions from '../features/card/BottomSheetOptions'
import Card from '../features/card/Card'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import SafeAreaView from '../features/base/SafeAreaView'
import ScreenHeading from '../features/base/ScreenHeading'

const backgroundImage = { uri: require('../assets/background.png') }

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function CardsScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sheetRef = React.useRef(null)

  const position = new Animated.ValueXY()

  // const getRandomNumber = () => {
  //   return Math.floor(Math.random() * 20) - 6
  // }

  const Cards = [
    { uri: require('../assets/cards/b.png'), deg: '6' },
    { uri: require('../assets/cards/e.png'), deg: '-6' },
    { uri: require('../assets/cards/m.png'), deg: '-3' },
    { uri: require('../assets/cards/p.png'), deg: '3' },
    { uri: require('../assets/cards/b.png'), deg: '9' },
    { uri: require('../assets/cards/e.png'), deg: '-2' },
    { uri: require('../assets/cards/m.png'), deg: '-6' },
    { uri: require('../assets/cards/p.png'), deg: '2' },
    { uri: require('../assets/cards/b.png'), deg: '-9' },
    { uri: require('../assets/cards/e.png'), deg: '-3' },
    { uri: require('../assets/cards/m.png'), deg: '3' },
    { uri: require('../assets/cards/p.png'), deg: '6' },
    { uri: require('../assets/cards/b.png'), deg: '2' },
    { uri: require('../assets/cards/e.png'), deg: '-6' },
    { uri: require('../assets/cards/m.png'), deg: '-8' },
    { uri: require('../assets/cards/p.png'), deg: '3' },
    { uri: require('../assets/cards/b.png'), deg: '6' },
    { uri: require('../assets/cards/e.png'), deg: '-6' },
    { uri: require('../assets/cards/m.png'), deg: '-3' },
    { uri: require('../assets/cards/p.png'), deg: '3' },
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
      } else {
        return (
          <Card
            key={i}
            totalLength={Cards.length}
            currentIndex={currentIndex}
            index={i}
            item={item}
            position={position}
            panResponserReleaseStart={panResponserReleaseStart}
          />
        )
      }
    }).reverse()
  }

  return (
    <React.Fragment>
      <SafeAreaView>
        <ImageBackground source={backgroundImage.uri} style={styles.backgroundImage} />
        <ScreenHeading sheetRef={sheetRef} />
        <View style={[styles.cardsContainer]}>{renderCards()}</View>
        <View style={[styles.cardSortContainer]}>
          <FontAwesome name="refresh" size={24} color="white" />
          <Text style={[styles.cardSortLabel]}>Randomise</Text>
        </View>
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
    flexGrow: 1,
    minHeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSortContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardSortLabel: {
    fontFamily: 'Campton-Light',
    textAlign: 'left',
    color: 'white',
    fontSize: 18,
    marginLeft: 8,
  },
})
