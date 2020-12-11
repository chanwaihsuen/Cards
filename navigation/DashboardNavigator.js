import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import DashboardScreen from '../screens/DashboardScreen'
import CardsScreen from '../screens/CardsScreen'

const Stack = createStackNavigator()

export default function DashboardNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Cards" component={CardsScreen} />
    </Stack.Navigator>
  )
}
