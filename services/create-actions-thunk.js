import { createActionThunk } from 'redux-thunk-actions'
import { camelCase } from 'lodash'

/**
 * Returns a list of useable thunk actions with predefined named constants
 * Example: (passing 'FETCH_IT')
 *  {
 *    fetchIt: [function],
 *    fetchItStarted: 'FETCH_IT_STARTED',
 *    fetchItSucceeded: 'FETCH_IT_SUCCEEDED',
 *    fetchItEnded: 'FETCH_IT_ENDED',
 *    fetchItFailed: 'FETCH_IT_FAILED',
 *  }
 */
export default actions =>
  Object.keys(actions)
    .map(k => {
      const thunk = createActionThunk(k, actions[k])

      return {
        [camelCase(thunk.NAME)]: thunk,
        [camelCase(thunk.START)]: thunk.START,
        [camelCase(thunk.SUCCEEDED)]: thunk.SUCCEEDED,
        [camelCase(thunk.FAILED)]: thunk.FAILED,
        [camelCase(thunk.ENDED)]: thunk.ENDED
      }
    })
    .reduce((acc, actions) => ({ ...acc, ...actions }), {})
