import request from 'superagent'
import React, { Component } from 'react'
import Head from 'next/head'
import connect from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import { css } from 'glamor'
import {
  Item,
  Grid,
  Form,
  Image,
  Icon,
  Menu,
  Button,
  Divider,
  Responsive
} from 'semantic-ui-react'
import { Div, H1, H2, P, Span } from 'glamorous'
import store from 'services/store'
import { Router } from 'routes'

css.global('*', { fontFamily: `'Montserrat', sans-serif` })

const primaryColor = '#ffb725'
const secondaryColor = '#5c5cf7'

const divHeader = css({
  '.ui':{
    backgroundImage: `url('/static/img/landing-header-bg.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    paddingBottom: "140px",
  }
})

const divMenu = css({
  '.ui':{
    textAlign: 'left',
    backgroundColor: 'transparent',
    color: '#fff',
    padding: '25px 15px',
    ' p':{
      fontSize: '22px',
      marginBottom: '0!important',
      fontWeight: '300',
      '@media(min-width: 768px)': {
          fontSize: '26px',
        },
    },
    ' h1':{
      fontSize: '46px',
      marginTop: '0!important',
      fontWeight: '700',
      fontFamily: `'Montserrat', sans-serif`,
      '@media(min-width: 768px)': {
          fontSize: '56px',
        },
    }
  }
})

const logo = css({
  width: '150px',
})

const service = css({
  color: '#353535',
  fontSize: '16px',
  ' h1':{
    color: '#5757a5',
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '46px',
    fontWeight: '700',
    marginBottom: '30px',
  },
  ' p':{
    fontSize: '22px',
  }
})

const serviceGrid = css({
  '.ui': {
    paddingBottom: '50px',
    ' img':{
      marginTop: '50px',
      marginBottom: '60px',
    },
    ' h3':{
      fontFamily: `'Montserrat', sans-serif`,
      color: '#18a9de',
      fontSize: '22px',
      fontWeight: '700',
      marginBottom: '20px',
    },
    ' p':{
      fontWeight: '300',
      fontSize: '16px',
      color: '#3d3d3d',
    }
  }
})

const introtxt = css({
  textAlign: 'left',
  color: '#fff',
  ' h1':{
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '46px',
    fontWeight: '700',
    '@media(min-width: 768px)': {
        fontSize: '56px',
    },
  },
  ' p':{
    fontSize: '20px',
    fontWeight: '300',
    '@media(min-width: 768px)': {
        fontSize: '22px',
    },
  },
})

const formClass = css({
  '.ui': {
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,.15)!important',
    padding: '25px 30px 30px!important',
    borderRadius: '10px',
    fontSize: '16px',
    fontFamily: `'Montserrat', sans-serif`,
    backgroundColor: '#fff',
    marginTop: '30px',
    ' h1':{
      color: '#3f3e85',
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: '700',
      fontSize: '32px',
      marginBottom: '0',
      '@media(min-width: 768px)': {
        fontSize: '36px',
      },
    },
    ' p':{
      color: '#5c5baa',
      fontWeight: '300',
      fontSize: '22px',
      marginTop: '0',
      '@media(min-width: 768px)': {
        fontSize: '28px',
      },
    },
    ' .ui input':{
        backgroundColor: '#f9f9f9!important',
        height: '80px',
    },
    ' textarea':{
        backgroundColor: '#f9f9f9!important',
    },
    ' button':{
      fontSize: '18px',
    }
  }
})

const quotesClass = css({
  '.ui': {
    paddingTop: '100px',
    paddingBottom: '100px',
    ' p':{
      fontSize: '18px',
      maxWidth: '930px',
      marginTop: '25px',
    },
    ' h4':{
      fontSize: '20px',
      color: '#18a9de',
    }

  }
})

const getquote = css({
  '.ui': {
    maxWidth: '240px',
    width: '100%',
    height: '60px',
    fontSize: '18px',
    backgroundColor: primaryColor,
    color: '#fff',
    margin: '10px',
    textTransform: 'uppercase',
    padding: '15px 30px',
    borderRadius: '30px',
    transition: 'all .5s',
    ':hover': {
      backgroundColor: primaryColor,
      color: '#fff'
    }
  }
})

const callnow = css({
  '.ui': {
    width: '240px',
    height: '60px',
    fontSize: '18px',
    backgroundColor: 'transparent',
    color: '#fff',
    margin: '10px',
    textTransform: 'uppercase',
    padding: '15px 30px',
    borderRadius: '30px',
    transition: 'all .5s',
    border: 'solid #fff 2px',
    ':hover': {
      backgroundColor: 'transparent',
      color: '#fff'
    }
  }
})
const consultation = css({
  color: '#fff',
  backgroundImage: `url('/static/img/landing-bg.png')`,
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '50px 10px 300px',
  ' h1':{
    marginTop: '60px',
    fontSize: '42px',
    fontWeight: '700',
    fontFamily: `'Montserrat', sans-serif`,
  },
  ' span':{
    fontSize: '40px',
    fontWeight: '300',
    verticalAlign: 'middle',
    lineHeight: '1.4',
    ' strong':{
      fontWeight: '400',
    }
  }
})
const footerClass = css({
  backgroundImage: `url('/static/img/landing-footer-bg.png')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '150px 0px 0px',
  marginTop: '-100px',
  '@media(min-width: 768px)': {
    padding: '200px 0px 0px',
  },
  ' h4':{
    fontSize: '22px',
    fontWeight: '400',
  },
  ' p':{
    fontWeight: '300',
    fontSize: '16px',
  },
  ' span':{
      lineHeight: '1.4',
      fontSize: '30px',
      '@media(min-width: 768px)': {
      fontSize: '40px',
      verticalAlign: 'middle',
    },
    ' strong':{
      display: 'block',
        '@media(min-width: 768px)': {
        display: 'inline-block',
      },
    }
  },
  ' .container':{
    paddingBottom: '50px',
    '@media(min-width: 768px)': {
      paddingBottom: '100px',
    },
  }
})

const copyright = css({
  '.ui': {
    padding: '35px 15px!important',
    marginLeft: '0!important',
    marginRight: '0!important',
    '@media(min-width: 768px)': {
      padding: '35px 50px!important',
    },
    ' p':{
      fontSize: '15px',
      marginBottom: '0',
      color: '#333',
      textAlign: 'center',
    }
  }
})

const mapState = ({ auth: { accessToken } }) => ({
  accessToken
})

const mapDispatch = null

@connect(store, mapState, mapDispatch)
export default class Index extends Component {
  state = {
    name: '',
    email: '',
    address: '',
    message: '',
    submitting: false,
    success: false
  }
  submit = async () => {
    this.setState({ submitting: true })

    const { name, email, address, message } = this.state

    const data = await request
      .post('https://contact-form.ams.armstead.io/')
      .send({
        receivers: ['familyfirstrestoration@live.com'],
        subject: 'Family First Construction Web Inquiry',
        body: `
          Name: ${name}\r
          Email: ${email}\r
          Phone: ${address}\r
          ---\r\r
          ${message}
        `
      })

    this.setState({
      name: '',
      email: '',
      address: '',
      message: '',
      submitting: false,
      success: true
    })

    setTimeout(() => this.setState({ success: false }), 5000)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  render() {
    const { name, email, address, message, submitting, success } = this.state

    return [
      <Head key="head">
        <title>TwoZ</title>
      </Head>,
      <Div key="body">
        <Grid className={`${divHeader}`}>
          <Grid container className={`${divMenu}`}>
            <Grid.Column 
              mobile={16}
              tablet={7}
              computer={7}
              verticalAlign='middle'>
              <Image className={`${logo}`} src="/static/img/logo.png" />
            </Grid.Column>
            <Grid.Column 
              mobile={16}
              tablet={9}
              computer={9}
              verticalAlign='middle'>
              <p>Talk to a Digital Strategist Today</p>
              <h1>2304 888 888</h1>
            </Grid.Column>
          </Grid>
          <Grid container centered>
            <Grid.Row>
              <Grid.Column 
                mobile={16}
                tablet={16}
                computer={7}
                verticalAlign='middle'
                className={`${introtxt}`}>
                <H1>Tech Wizardry Solutions, made splendidly.</H1>
                <P>We focus on helping your business make effective online</P>
                <Button type="submit" className={`${callnow}`}>
                  CALL NOW
                </Button>
              </Grid.Column>
              <Grid.Column 
              mobile={16}
              tablet={16}
              computer={9}
              verticalAlign='top'>
                {success ? (
                  <p>Thanks! We'll be in touch soon.</p>
                ) : (
                  <Form onSubmit={this.submit} loading={submitting} className={`${formClass}`}>
                    <h1>Free Proposal & Consultation</h1>
                    <p>Increase your profit, efficiency & ROI</p>
                    <Form.Group widths='equal'>
                      <Form.Input
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={this.handleChange}
                        required
                      />
                      <Form.Input
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Input
                      name="address"
                      value={address}
                      placeholder="Address"
                      onChange={this.handleChange}
                      required
                    />
                    <Form.TextArea
                      name="message"
                      value={message}
                      rows="10"
                      placeholder="Message"
                      onChange={this.handleChange}
                      required
                    />
                    <Button type="submit" className={`${getquote}`}>
                      SEND
                    </Button>
                  </Form>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid>
        <Div className={`${service}`}>
          <Grid container textAlign="center" centered>
            <Grid.Column
              mobile={16}
              tablet={12}
              computer={12}
              verticalAlign="middle"
            >
              <H1>Why Choose Twoz?</H1>
              <P>We focus on helping your business make effective online</P>
            </Grid.Column>
          </Grid>

          <Grid container className={`${serviceGrid}`} centered>
            <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
              <Div>
                <Image centered src="/static/img/serve-icon1.png" />
                <h3>SERVICES NAME</h3>
                <p>
                  This is the content of the area. We can replace any content on this paragraph. This is the 
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
              <Div>
                <Image centered src="/static/img/serve-icon2.png" />
                <h3>SERVICES NAME</h3>
                <p>
                  This is the content of the area. We can replace any content on this paragraph. This is the 
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
              <Div>
                <Image centered src="/static/img/serve-icon3.png" />
                <h3>SERVICES NAME</h3>
                <p>
                  This is the content of the area. We can replace any content on this paragraph. This is the 
                </p>
              </Div>
            </Grid.Column>
          </Grid>
        </Div>

        <Div className={`${consultation}`}>
          <Grid container textAlign="center" centered>
            <Grid.Column
              mobile={16}
              tablet={12}
              computer={12}
              verticalAlign="middle"
            >
              <Image centered src="/static/img/wizardy-img2.png" />
              <H1>Book Your FREE Consultation</H1>
              <Span>Call <strong>2394 888 888</strong></Span>
              <Button type="submit" className={`${getquote}`}>
                SEND
              </Button>
            </Grid.Column>
          </Grid>
        </Div>

        <Div className={`${footerClass}`} >
          <Grid container verticalAlign="middle" centered>
            <Grid.Column verticalAlign="middle">
              <h4>Our Partners :</h4>
              <Image centered src="/static/img/sample-logo.png" />
            </Grid.Column>
          </Grid>
          <Grid container verticalAlign="middle" centered>
            <Grid.Column verticalAlign="middle" >
              <Span><Span> Call Today!</Span> <strong>2394 888 888</strong></Span>
              <Button type="submit" className={`${getquote}`}>
                SEND
              </Button>
              <P marginTop="20px">This is the content of the area. We can replace any content on this paragraph. </P>
            </Grid.Column>
          </Grid>
          <Divider />
          <Grid verticalAlign="middle" className={`${copyright}`}>
            <Grid.Column>
              <Responsive minWidth={768}>
                <P float="left">TWOZ Copyright © 2017. All Rights Reserved.</P>
                <P float="right">Empowered by  Armstead Inc.</P>
              </Responsive>
              <Responsive maxWidth={767}>
                <P>TWOZ Copyright © 2017. All Rights Reserved.</P>
                <P>Empowered by  Armstead Inc.</P>
              </Responsive>
              </Grid.Column>
          </Grid>
        </Div>
      </Div>
    ]
  }
}
