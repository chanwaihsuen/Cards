import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'

import Navigation from './navigation'
import store from './store'

const theme = { ...DefaultTheme }

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <Navigation />
          <StatusBar style="auto" />
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  )
}
