import { handleActions } from 'redux-actions'
import {
  updateMeStarted,
  updateMeSucceeded,
  updateMeFailed,
  updateMeEnded
} from 'actions'
import { Router } from 'routes'

const defaultState = {
  pageIsLoading: false,
  formIsSubmitting: false,
  pageError: null,
  formError: null
}

export default handleActions(
  {
    [updateMeStarted]: state => ({
      ...state,
      formIsSubmitting: true
    }),
    [updateMeSucceeded]: state => {
      Router.push('/')

      return state
    },
    [updateMeFailed]: state => ({
      ...state,
      formError: 'Could not submit the form'
    }),
    [updateMeEnded]: state => ({
      ...state,
      formIsSubmitting: false
    })
  },
  defaultState
)
