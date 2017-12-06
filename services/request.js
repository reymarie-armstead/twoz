import Cookies from 'universal-cookie'
import req from 'superagent'
import { resolve } from 'url'
import { Router } from 'routes'
import { apiUrl } from 'services/config'

let accessToken

const setDefaultHeaders = () =>
  accessToken ? { Authorization: `Bearer ${accessToken}` } : {}

const unauthorizedRedirect = req =>
  req.on(
    'response',
    ({ status }) => (status === 401 ? Router.pushRoute('/logout') : null)
  )

export const setAccessToken = at => (accessToken = at)

export const post = (path, ...rest) =>
  req
    .post(resolve(apiUrl, path), ...rest)
    .type('application/json')
    .accept('application/json')
    .set(setDefaultHeaders())
    .use(unauthorizedRedirect)

export const put = (path, ...rest) =>
  req
    .put(resolve(apiUrl, path), ...rest)
    .type('application/json')
    .accept('application/json')
    .set(setDefaultHeaders())
    .use(unauthorizedRedirect)

export const patch = (path, ...rest) =>
  req
    .patch(resolve(apiUrl, path), ...rest)
    .type('application/json')
    .accept('application/json')
    .set(setDefaultHeaders())
    .use(unauthorizedRedirect)

export const del = (path, ...rest) =>
  req
    .del(resolve(apiUrl, path), ...rest)
    .type('application/json')
    .accept('application/json')
    .set(setDefaultHeaders())
    .use(unauthorizedRedirect)

export const get = (path, ...rest) =>
  req
    .get(resolve(apiUrl, path), ...rest)
    .type('application/json')
    .accept('application/json')
    .set(setDefaultHeaders())
    .use(unauthorizedRedirect)
