import { createActions } from 'redux-actions'
import createActionsThunk from 'services/create-actions-thunk'
import { get, patch } from 'services/request'

const { login, logout } = createActions({
  LOGIN: ({ accessToken }) => ({ accessToken }),
  LOGOUT: () => {}
})

/**
 * NOTE TO DEV's
 * getState and dispatch methods are available as a secondary parameter
 *
 * IE: createActionsThunk({
 *   SOME_ACTION: async (actionParams, secondaryParams) => {do await logic}
 * })
 */

const {
  loadMe,
  loadMeStarted,
  loadMeSucceeded,
  loadMeFailed,
  loadMeEnded,
  updateMe,
  updateMeStarted,
  updateMeSucceeded,
  updateMeFailed,
  updateMeEnded
} = createActionsThunk({
  LOAD_ME: async () => await get('/me'),
  UPDATE_ME: async data => await patch('/me').send(data)
})

export {
  login,
  logout,
  loadMe,
  loadMeStarted,
  loadMeSucceeded,
  loadMeFailed,
  loadMeEnded,
  updateMe,
  updateMeStarted,
  updateMeSucceeded,
  updateMeFailed,
  updateMeEnded
}
