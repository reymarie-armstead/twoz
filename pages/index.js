import React, { Component } from 'react'
import Head from 'next/head'
import connect from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import { Div } from 'glamorous'
import { Container } from 'semantic-ui-react'
import store from 'services/store'
import Default from 'components/layouts/default'
import { Router } from 'routes'

const mapState = ({
  auth: { accessToken }
}) => ({
  accessToken
})

const mapDispatch = null

@connect(store, mapState, mapDispatch)
export default class Index extends Component {
  render() {
    return [
      <Head key="head">
        <title>Home Page</title>
      </Head>,
      <Default
        key="body"
      >
        <Container>
          <Div>Home Page</Div>
        </Container>
      </Default>
    ]
  }
}
