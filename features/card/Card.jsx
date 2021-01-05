import { Animated, Dimensions, Image, PanResponder, StyleSheet, Text, View } from 'react-native'

import React from 'react'

// const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function Card(props) {
  const { index, currentIndex, item, position, panResponserReleaseStart } = props

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
          panResponserReleaseStart()
          // setCurrentIndex(currentIndex + 1)
        })
      } else if (gestureState.dx < -120) {
        Animated.spring(position, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          useNativeDriver: true,
        }).start(() => {
          panResponserReleaseStart()
          // setCurrentIndex(currentIndex + 1)
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

  const nextCardRotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['0deg', `${item.deg}deg`, '0deg'],
    extrapolate: 'clamp',
  })

  const nextCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  })

  // const nextCardScale = position.x.interpolate({
  //   inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
  //   outputRange: [1, 0.8, 1],
  //   extrapolate: 'clamp',
  // })

  if (currentIndex === index) {
    // TOP CARD
    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          {
            opacity: 1,
            transform: [{ rotate: rotate }, ...position.getTranslateTransform()],
          },
          styles.card,
        ]}>
        <Image style={styles.image} source={item.uri} />
      </Animated.View>
    )
  }

  if (currentIndex + 1 === index) {
    // 2nd CARD
    return (
      <Animated.View
        style={[
          {
            opacity: 1,
            transform: [{ rotate: nextCardRotate }],
          },
          styles.card,
        ]}>
        <Image style={styles.image} source={item.uri} />
      </Animated.View>
    )
  } else if (currentIndex + 2 === index) {
    // 3RD CARD
    return (
      <View
        style={[
          {
            opacity: 1,
            transform: [{ rotate: `${item.deg}deg` }],
          },
          styles.card,
        ]}>
        <Image style={styles.image} source={item.uri} />
        <Text style={styles.textthree}>3rd: {item.deg}deg</Text>
      </View>
    )
  } else if (currentIndex + 3 === index) {
    // 4th CARD
    return (
      <Animated.View
        style={[
          {
            opacity: nextCardOpacity,
            transform: [{ rotate: `${item.deg}deg` }],
          },
          styles.card,
        ]}>
        <Text style={styles.textfour}>4th: {item.deg}deg</Text>
        <Image style={styles.image} source={item.uri} />
      </Animated.View>
    )
  } else {
    return <React.Fragment></React.Fragment>
  }
  // else {
  //   // OTHERS CARD
  //   return (
  //     <Animated.View
  //       style={[
  //         {
  //           opacity: 0,
  //         },
  //         styles.card,
  //       ]}>
  //       <Image style={styles.image} source={item.uri} />
  //     </Animated.View>
  //   )
  // }
}

const styles = StyleSheet.create({
  card: {
    // height: 500,
    // width: 295,
    height: 300,
    width: 195,
    padding: 10,
    position: 'absolute',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  textthree: {
    position: 'absolute',
    fontFamily: 'Campton-Light',
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    bottom: -50,
  },
  textfour: {
    position: 'absolute',
    fontFamily: 'Campton-Light',
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    top: -50,
  },
})
