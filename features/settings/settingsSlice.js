import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    caps: false,
    smallCaps: false,
    picture: false,
    word: false,
  },
  reducers: {
    setCaps: (state, action) => {
      state.caps = action.payload
    },
    setSmallCaps: (state, action) => {
      state.smallCaps = action.payload
    },
    setPicture: (state, action) => {
      state.picture = action.payload
    },
    setWord: (state, action) => {
      state.word = action.payload
    },
  },
})

export const { setCaps, setSmallCaps, setPicture, setWord } = settingsSlice.actions

export default settingsSlice.reducer
