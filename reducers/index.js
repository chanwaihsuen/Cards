import { combineReducers } from 'redux'

import settingsReducer from '../features/settings/settingsSlice'

export default combineReducers({
  settings: settingsReducer,
})
