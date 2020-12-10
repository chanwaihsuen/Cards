import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    user: null,
    showWelcomeScreen: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setShowWelcomeScreen: (state, action) => {
      state.showWelcomeScreen = action.payload
    },
  },
})

export const { setUser, setShowWelcomeScreen } = settingsSlice.actions

export default settingsSlice.reducer
