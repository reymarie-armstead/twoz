import React, { Component } from 'react'
import Head from 'next/head'
import connect from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import { Div } from 'glamorous'
import { Item, Grid } from 'semantic-ui-react'
import store from 'services/store'
import { Router } from 'routes'

const mapState = ({ auth: { accessToken } }) => ({
  accessToken
})

const mapDispatch = null

@connect(store, mapState, mapDispatch)
export default class Index extends Component {
  render() {
    return [
      <Head key="head">
        <title>Landing Page</title>
      </Head>,
      <Div key="body">
        <Div
          backgroundImage="url('/static/bg.png')"
          backgroundSize="cover"
          height="600px"
        >
          <Div
            height="135px"
            padding="10px"
            display="-webkit-box"
            display="-ms-flexbox"
            display="flex"
          >
            <Item>
              <img width="260px" src="/static/ffc-logo.svg" />
            </Item>
            <Item position="right">
              <Item>
                <p>
                  <strong>227 Marlon Street</strong> <br />Columbia, SC 29201
                </p>
              </Item>
              <Item>
                <p>
                  <strong>Mon-Sat 7AM-5PM</strong> <br />Sunday CLOSED
                </p>
              </Item>
              <Item>
                <p>
                  <strong>(847) 252-5126</strong> <br />info@ffc.com
                </p>
              </Item>
            </Item>
          </Div>
        </Div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={8} />
          <Grid.Column mobile={16} tablet={8} computer={8} />
        </Grid>
      </Div>
    ]
  }
}
