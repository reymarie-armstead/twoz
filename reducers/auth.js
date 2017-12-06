import Cookies from 'universal-cookie'
import { handleActions, combineActions } from 'redux-actions'
import { login, logout, loadMeSucceeded, updateMeSucceeded } from 'actions'
import { setAccessToken } from 'services/request'

const defaultState = {}

export default handleActions(
  {
    [login]: (state, { payload: { accessToken } }) => {
      const cookies = new Cookies()
      cookies.set('access_token', accessToken)
      setAccessToken(accessToken)

      return {
        ...state,
        accessToken
      }
    },
    [logout]: state => {
      const cookies = new Cookies()
      cookies.remove('access_token')

      return {}
    },
    [combineActions(loadMeSucceeded, updateMeSucceeded)]: (
      state,
      { payload: { body: user } }
    ) => ({ ...state, user })
  },
  defaultState
)
