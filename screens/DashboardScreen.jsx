import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Switch, Subheading, Button } from 'react-native-paper'
import { StyleSheet, Text, View } from 'react-native'
import SafeAreaView from '../features/base/SafeAreaView'
import ScreenHeading from '../features/base/ScreenHeading'

export default function DashboardScreen() {
  const navigation = useNavigation()

  const [isSwitchOn, setIsSwitchOn] = React.useState(false)

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

  const generateCardPressed = () => {
    navigation.navigate('Cards')
  }

  return (
    <SafeAreaView>
      <ScreenHeading>Settings For Cards</ScreenHeading>
      <View style={[styles.body]}>
        <View style={[styles.content]}>
          <View style={[styles.switch]}>
            <Subheading>
              Show Text <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            </Subheading>
          </View>
          <View style={[styles.switch]}>
            <Subheading>
              Show Images <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            </Subheading>
          </View>
          <View style={[styles.switch]}>
            <Button icon="cards" mode="contained" onPress={generateCardPressed}>
              Generate Cards
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  switch: {
    textAlign: 'left',
    marginVertical: 16,
  },
})
