import Cookies from 'universal-cookie'
import reducers from 'reducers'
import { createStore as create, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { login, loadMe } from 'actions'
import { debug } from 'services/config'

const middleware = []

if (debug) {
  const { logger } = require('redux-logger')

  middleware.push(logger)
}

middleware.push(thunk)

export default (initialState = {}, { isServer, req }) =>
  create(reducers, initialState, applyMiddleware(...middleware))
