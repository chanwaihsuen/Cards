import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import DashboardScreen from '../screens/DashboardScreen'

const Stack = createDrawerNavigator()

export default function DashboardNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  )
}
