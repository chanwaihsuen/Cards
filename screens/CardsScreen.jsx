import { Animated, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import AnimatedCard from '../features/card/AnimatedCard'
import BottomSheetOptions from '../features/card/BottomSheetOptions'
import { FontAwesome } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import SafeAreaView from '../features/base/SafeAreaView'
import ScreenHeading from '../features/base/ScreenHeading'

const backgroundImage = { uri: require('../assets/background.png') }

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function CardsScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sortType, setSortType] = useState('random')
  const sheetRef = React.useRef(null)

  const position = new Animated.ValueXY()

  // const getRandomNumber = () => {
  //   return Math.floor(Math.random() * 20) - 6
  // }

  const OriginalCards = [
    { word: 'bread', color: '#EEC45B', letter: 'b', uri: require('../assets/cards/b.png'), deg: '6' },
    { word: 'egg', color: '#E59A48', letter: 'e', uri: require('../assets/cards/e.png'), deg: '9' },
    { word: 'milk', color: '#ECC2C0', letter: 'm', uri: require('../assets/cards/m.png'), deg: '6' },
    { word: 'peach', color: '#FAF1E2', letter: 'p', uri: require('../assets/cards/p.png'), deg: '9' },
  ]

  useEffect(() => {
    position.setValue({ x: 0, y: 0 })
  }, [currentIndex])

  let cards = [...OriginalCards]

  if (sortType === 'random') {
    cards.sort(() => Math.random() - 0.5)
  }

  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  const panResponserReleaseStart = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const renderCards = () => {
    return cards
      .map((item, i) => {
        if (i < currentIndex) {
          return null
        } else {
          return (
            <AnimatedCard
              key={i}
              totalLength={cards.length}
              currentIndex={currentIndex}
              index={i}
              item={item}
              position={position}
              panResponserReleaseStart={panResponserReleaseStart}
            />
          )
        }
      })
      .reverse()
  }

  const cardSortHandler = () => {
    if (sortType === 'random') {
      setSortType('alphabetical')
    } else {
      setSortType('random')
    }
  }

  const renderCardSort = () => {
    if (sortType === 'random') {
      return (
        <React.Fragment>
          <FontAwesome5 name="list" size={24} color="white" />
          <Text style={[styles.cardSortLabel]}>By alphabetical order</Text>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <FontAwesome name="refresh" size={24} color="white" />
        <Text style={[styles.cardSortLabel]}>Randomise</Text>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <SafeAreaView>
        <ImageBackground source={backgroundImage.uri} style={styles.backgroundImage} />
        <ScreenHeading sheetRef={sheetRef} />
        <View style={[styles.cardsContainer]}>{renderCards()}</View>
        <TouchableOpacity style={[styles.cardSortContainer]} onPress={() => cardSortHandler()}>
          {renderCardSort()}
        </TouchableOpacity>
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
