import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { useSelector } from 'react-redux'

export default function Card(props) {
  const { item } = props

  const caps = useSelector((state) => state.settings.caps)
  const smallCaps = useSelector((state) => state.settings.smallCaps)
  const picture = useSelector((state) => state.settings.picture)
  const word = useSelector((state) => state.settings.word)

  return (
    <View
      style={[
        {
          backgroundColor: item.color,
        },
        styles.cardsContainer,
      ]}>
      {picture ? (
        <Text style={styles.topText}>
          {caps && item.letter.toUpperCase()}
          {smallCaps && item.letter}
        </Text>
      ) : (
        <Text style={styles.topTextWithoutPicture}>
          {caps && item.letter.toUpperCase()}
          {smallCaps && item.letter}
        </Text>
      )}

      {picture && <Image style={styles.image} source={item.uri} />}
      {word && <Text style={styles.bottomText}>{item.word}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 40,
    borderRadius: 20,
    justifyContent: 'center',
  },
  text: {
    flex: 1,
  },
  image: {
    height: 250,
    width: 250,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  topText: {
    fontFamily: 'Campton-Bold',
    textAlign: 'left',
    color: 'white',
    fontSize: 48,
    marginBottom: 8,
  },
  topTextWithoutPicture: {
    fontFamily: 'Campton-Bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 96,
  },
  bottomText: {
    fontFamily: 'Campton-Bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 48,
  },
})
