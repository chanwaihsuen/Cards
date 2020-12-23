import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import SafeAreaView from '../features/base/SafeAreaView'

import LogoSvg from '../assets/svg/logo'

const topBadge = { uri: require('../assets/top-badge.png') }
const bottomBadge = { uri: require('../assets/lower-badge.png') }

// const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function DashboardScreen() {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View style={[styles.body]}>
        <View style={[styles.logo]}>
          <LogoSvg />
        </View>

        <View style={[styles.content]}>
          <View style={[styles.badgeContainer]}>
            <Text style={[styles.header]}>Select a flash card category</Text>
            <TouchableOpacity style={[styles.touchBtn]} onPress={() => navigation.navigate('Cards')}>
              <ImageBackground source={topBadge.uri} style={styles.topBadgeImage} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.touchBtn]} onPress={() => navigation.navigate('Cards')}>
              <ImageBackground source={bottomBadge.uri} style={styles.bottomBadgeImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontFamily: 'Campton-Light',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 16,
  },

  badgeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  touchBtn: {
    margin: 12,
    borderRadius: 16,
    overflow: 'hidden',
  },

  topBadgeImage: {
    width: SCREEN_WIDTH - 32,
    height: 250,
    resizeMode: 'cover',
  },

  bottomBadgeImage: {
    width: SCREEN_WIDTH - 32,
    height: 250,
    resizeMode: 'cover',
  },
})
