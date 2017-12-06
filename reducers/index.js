import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from 'reducers/auth'
import ui from 'reducers/ui'

export default combineReducers({
  auth,
  form,
  ui
})
