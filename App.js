import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'

import Navigation from './navigation'
import store from './store'

const theme = { ...DefaultTheme }

export default function App() {
  let [fontsLoaded] = useFonts({
    'Campton-Light': require('./assets/fonts/Campton-Light.otf'),
    'Campton-Medium': require('./assets/fonts/Campton-Medium.otf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <PaperProvider theme={theme}>
            <Navigation />
            <StatusBar barStyle="light-content" style="auto" />
          </PaperProvider>
        </SafeAreaProvider>
      </Provider>
    )
  }
}
