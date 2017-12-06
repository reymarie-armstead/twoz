import React, { Component } from 'react'
import Head from 'next/head'
import connect from 'next-redux-wrapper'
import store from 'services/store'
import { logout } from 'actions'
import { Router } from 'routes'
import LoadingScreen from 'components/simple-loading-screen'

class Logout extends Component {
  componentDidMount() {
    const { onLogout } = this.props
    onLogout()
    Router.pushRoute('/')
  }
  render() {
    return [
      <Head key="head">
        <title>Logging Out</title>
      </Head>,
      <LoadingScreen />
    ]
  }
}

const mapState = state => ({})
const mapDispatch = dispatch => ({
  onLogout: opts => dispatch(logout(opts))
})

export default connect(store, mapState, mapDispatch)(Logout)
