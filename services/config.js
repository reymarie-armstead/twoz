const {
  NODE_ENV: nodeEnv,
  DEBUG: debugStr,
  PORT: port,
  APP_URL: appUrl,
  API_URL: apiUrl,
  SEGMENT_KEY: segmentKey,
  AUTH0_DOMAIN: auth0Domain,
  AUTH0_CLIENT_ID: auth0ClientId,
  AUTH0_AUDIENCE: auth0Audience
} = process.env

const debug = debugStr === 'true'

export {
  nodeEnv,
  debug,
  port,
  appUrl,
  apiUrl,
  segmentKey,
  auth0Domain,
  auth0ClientId,
  auth0Audience
}
