import _ from 'lodash'
import React, { Component } from 'react'
import Head from 'next/head'
import connect from 'next-redux-wrapper'
import store from 'services/store'
import auth from 'services/auth'
import { bindActionCreators } from 'redux'
import { Router } from 'routes'
import { login, loadMe } from 'actions'
import LoadingScreen from 'components/simple-loading-screen'

const mapDispatch = dispatch => bindActionCreators({ login, loadMe }, dispatch)

@connect(store, null, mapDispatch)
export default class Callback extends Component {
  componentDidMount() {
    const { login, loadMe } = this.props

    auth.parseHash(async (err, { accessToken }) => {
      login({ accessToken })
      const { body: { user_metadata: extraData } } = await loadMe()
    })
  }
  render() {
    return [
      <Head key="head">
        <title>Log In</title>
      </Head>,
      <LoadingScreen />
    ]
  }
}
