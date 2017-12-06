import {
  appUrl,
  auth0Domain as domain,
  auth0ClientId as clientID,
  auth0Audience as audience
} from 'services/config'

let auth

if (typeof window !== 'undefined') {
  const auth0 = require('auth0-js')

  auth = new auth0.WebAuth({
    domain,
    clientID,
    audience,
    redirectUri: `${appUrl}/callback`,
    responseType: 'token id_token',
    scope: 'openid'
  })
} else auth = { authorize() {}, parseHash() {} }

export default auth
export const login = () => {
  auth.authorize()
}
