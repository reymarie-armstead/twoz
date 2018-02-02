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
  Table,
  Responsive,
  Accordion
} from 'semantic-ui-react'
import { Div, H1, H2, P, Span } from 'glamorous'
import { Text } from 'axs'
import store from 'services/store'
import { Router } from 'routes'

css.global('*', { fontFamily: `'Montserrat', sans-serif` })

const primaryColor = '#ffb725'
const secondaryColor = '#5c5cf7'

const divMenu = css({
  textAlign: 'center',
  background: 'linear-gradient(to left, rgba(255,255,255,.01) 0%, rgba(255,255,255,.8) 50%, rgba(255,255,255,.01) 100%)',
  backgroundColor: 'transparent',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '60% 2px '
})
const menuclass = css({
  '.ui': {
    backgroundColor: 'transparent',
    '@media(min-width: 768px)': {
      maxWidth: '590px',
      width: '100%!important',
      textAlign: 'center',
      margin: 'auto!important',
      border: '0',
    }
  }
})
const menuitem = css({
  color: '#fff!important',
  fontSize: '20px',
  textAlign: 'center',
  padding: '37px 15px!important',
  letterSpacing: '1.3px',
  '@media(min-width: 768px)': {
    fontSize: '20px'
  }
})

const wizardyImg = css({
    position: 'absolute!important',
    left: '50%',
    transform: 'translate(-50%, -65%)',
})
const logo = css({
  width: '260px',
  margin: '0 auto',
  '@media(min-width: 768px)': {
    width: '170px'
  },
  '@media(min-width: 1080px)': {
    width: '260px'
  }
})
const aBlack = css({
  
})

const h1Class = css({
  fontFamily: `'Montserrat', sans-serif`,
  fontWeight: 'bold',
  fontSize: '34px',
  '@media(min-width: 480px)': {
    fontSize: '42px',
  }
})

const h3Class = css({
  fontFamily: `'Montserrat', sans-serif`,
  marginTop: '20px!important',
  fontSize: '20px',
  color: '#18a9de',
})

const bannerGrid = css({
  '.ui': {
    margin: 'auto!important',
    padding: '40px 0 40px',
    color: '#fff',
    '@media(min-width: 500px)': {
      padding: '80px 0 320px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
      backgroundSize: 'contain',
      backgroundImage: `url('/static/img/city-bg.png')`
    },
    ' p':{
      textAlign: 'center',
      color: '#fff',
      maxWidth: '780px',
      margin: '0 auto 30px',
    }
  }
})
const service = css({
  paddingTop: '200px',
  color: '#353535',
  fontSize: '16px',
  ' h1':{
    color: '#18a9de',
    marginBottom: '30px',
  }
})

const serviceGrid = css({
  '.ui': {
    paddingTop: '100px',
    paddingBottom: '50px',
  }
})

const bg3 = css({
  backgroundImage: `url('/static/img/pricing-bg.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

const solutionsGrid = css({
  '.ui': {
    paddingTop: '100px',
    paddingBottom: '60px',
    ' h1':{
      color: '#4e529d',
    },
    ' h4':{
      color: '#3d3d3d',
      fontSize: '20px',
      fontFamily: `'Montserrat', sans-serif`,
    },
    ' p':{
      color: '#3d3d3d',
      fontSize: '18px',
    },
  }
})

const pricingGrid = css({
  '.ui': {
    paddingTop: '100px',
    paddingBottom: '100px',
    textAlign: 'center',
    ' h1':{
      color: '#000',
    },
    ' h4':{
      color: '#3d3d3d',
      fontSize: '20px',
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: '300',
    },
  }
})

const formClass = css({
  '.ui': {
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,.15)!important',
    padding: '25px 30px 30px!important',
    borderRadius: '10px',
    fontSize: '16px',
    fontFamily: `'Montserrat', sans-serif`,
    backgroundColor: '#fff',
    marginBottom: '-200px',
    marginTop: '30px',
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

const accordionGrid = css({
  '.ui': {
    paddingTop: '80px',
    marginBottom: '50px',
  }
})

const accordionStyle = css({
  '.ui': {
    boxShadow: '1px 3px 10px 5px rgba(0,0,0,.15)!important',
    paddingTop: '25px!important',
    marginBottom: '50px',
    fontSize: '20px',
    textAlign: 'left',
    ' .title':{
        paddingLeft: '50px!important',
    },
    ' .content':{
      paddingLeft: '50px!important',
    }
  }
})

const circleClass = css({
  position: 'relative',
  width: '150px',
  height: '150px',
  backgroundColor: '#f9f9f9',
  borderRadius: '50%',
  float: 'left',
  marginRight: '40px',
  opacity: '.85',
  ':before':{
    content:`url('/static/img/quote.png')`,
    position: 'absolute',
    top: '-30px',
    left: '-30px',
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

const getquote2 = css({
  '.ui': {
    width: '240px',
    height: '60px',
    fontSize: '16px',
    backgroundColor: secondaryColor,
    color: '#fff',
    margin: '10px',
    textTransform: 'uppercase',
    padding: '15px 30px',
    borderRadius: '30px',
    transition: 'all .5s',
    ':hover': {
      backgroundColor: secondaryColor,
      color: '#fff'
    }
  }
})

const getquote = css({
  '.ui': {
    width: '240px',
    height: '60px',
    fontSize: '16px',
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

const learnmore = css({
  '.ui': {
    width: '240px',
    height: '60px',
    fontSize: '16px',
    backgroundColor: 'transparent',
    color: '#fff',
    margin: '10px',
    border: 'solid 1px #fff',
    textTransform: 'uppercase',
    padding: '15px 30px',
    borderRadius: '30px',
    transition: 'all .5s',
    ':hover': {
      backgroundColor: 'transparent',
      color: '#fff'
    }
  }
})

const footerClass = css({
  color: '#fff',
  backgroundImage: `url('/static/img/footer-bg.png')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '400px 10px 50px',
  '@media(min-width: 768px)': {
    padding: '400px 15px 100px',
  },
  ' h2':{
    fontSize: '30px',
    fontWeight: '400',
  },
  ' p':{
    fontWeight: '400',
    fontSize: '20px',
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
    success: false,
    activeIndex: 0
  }
  submit = async () => {
    this.setState({ submitting: true })

    const { name, email, address, message, activeItem } = this.state

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
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  render() {
    const { name, email, address, message, submitting, success, activeItem, activeIndex  } = this.state

    return [
      <Head key="head">
        <title>TwoZ</title>
      </Head>,
      <Div key="body">
        <Div backgroundImage="url('/static/img/header-bg.jpg')" backgroundSize="cover" backgroundPosition="center">
          <Div className={`${divMenu}`}>
            <Menu
              secondary
              stackable
              className={`${menuclass}`}
            >
              <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
                className={`${menuitem}`}
              >
                ABOUT
              </Menu.Item>

              <Menu.Item
                name='casesStudy'
                active={activeItem === 'casesStudy'}
                onClick={this.handleItemClick}
                className={`${menuitem}`}
              >
                CASE STUDY
              </Menu.Item>

              <Menu.Item
                name='services'
                active={activeItem === 'services'}
                onClick={this.handleItemClick}
                className={`${menuitem}`}
              >
                SERVICES
              </Menu.Item>

              <Menu.Item
                name='contacts'
                active={activeItem === 'contacts'}
                onClick={this.handleItemClick}
                className={`${menuitem}`}
              >
                CONTACTS
              </Menu.Item>

            </Menu>
          </Div>
          <Grid className={`${bannerGrid}`} centered>
            <Grid.Column textAlign="center">
              <Image centered src="/static/img/logo.png" />
              <H1 className={`${h1Class}`}>Tech Wizardry Solutions, made splendidly.</H1>
              <P>
                This is the content of the area. We can replace any content on this paragraph. This is the content of the area. We can replace any content on this paragraph.
              </P>
              <Button type="submit" className={`${getquote}`}>
                GET A QUOTE
              </Button>
              <Button type="" className={`${learnmore}`}>
                LEARN MORE
              </Button>
            </Grid.Column>
          </Grid>
        </Div>
        <Image className={`${wizardyImg}`} src="/static/img/wizardy-img.png" />
        <Div className={`${service}`}>
          <Grid container textAlign="center" centered>
            <Grid.Column
              mobile={16}
              tablet={12}
              computer={12}
              verticalAlign="middle"
            >
              <H1 className={`${h1Class}`}>Everything you need to know</H1>
              <P>
                This is the content of the area. We can replace any content on this paragraph. This is the content of the area. We can replace any content on this paragraph.This is the content of the area. We can replace any content on this paragraph. This is thecontent of the area. We can replace any content on this paragraph. This is the content of the area. 
              </P>
              <Button type="submit" className={`${getquote2}`}>
                GET A QUOTE
              </Button>
            </Grid.Column>
          </Grid>

          <Grid container className={`${serviceGrid}`} centered>
            <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
              <Div marginTop="50px">
                <Image centered src="/static/img/serve-icon1.png" />
                <h3 className={`${h3Class}`}>SERVICES NAME</h3>
                <p>
                  This is the content of the area. We can replace any content on this paragraph. This is the 
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
              <Div marginTop="50px">
                <Image centered src="/static/img/serve-icon2.png" />
                <h3 className={`${h3Class}`}>SERVICES NAME</h3>
                <p>
                  This is the content of the area. We can replace any content on this paragraph. This is the 
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
              <Div marginTop="50px">
                <Image centered src="/static/img/serve-icon3.png" />
                <h3 className={`${h3Class}`}>SERVICES NAME</h3>
                <p>
                  This is the content of the area. We can replace any content on this paragraph. This is the 
                </p>
              </Div>
            </Grid.Column>

            <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
              <Div marginTop="50px">
                <Image centered src="/static/img/serve-icon2.png" />
                <h3 className={`${h3Class}`}>SERVICES NAME</h3>
                <p>
                  This is the content of the area. We can replace any content on this paragraph. This is the 
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
              <Div marginTop="50px">
                <Image centered src="/static/img/serve-icon3.png" />
                <h3 className={`${h3Class}`}>SERVICES NAME</h3>
                <p>This is the content of the area. We can replace any content on this paragraph. This is the </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
              <Div marginTop="50px">
                <Image centered src="/static/img/serve-icon1.png" />
                <h3 className={`${h3Class}`}>SERVICES NAME</h3>
                <p>
                  This is the content of the area. We can replace any content on this paragraph. This is the 
                </p>
              </Div>
            </Grid.Column>
          </Grid>
        </Div>
     
        <Div className={`${bg3}`}>
          <Grid container className={`${solutionsGrid}`}>
            <Grid.Column mobile={16} tablet={8} computer={8} verticalAlign='middle'>
              <H1 className={`${h1Class}`}>Wizardy Solutions</H1>
              <h4>This is the content of the area. We can replace any content on this paragraph.</h4>
              <p>This is the content of the area. We can replace any content on this paragraph.This is the content of the area. We can replaceany content on this paragraph.This is the content of the area.</p>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Image src="/static/img/wizardy-bg.png" />
            </Grid.Column>
          </Grid>
          <Grid container className={`${pricingGrid}`}>
            <Grid.Column verticalAlign='middle'>
              <H1 className={`${h1Class}`}>Plans and Pricing</H1>
              <h4>This is the content of the area. We can replace any content on this paragraph.</h4>
              <Button type="submit" className={`${getquote2}`}>
                GET A QUOTE
              </Button>
            </Grid.Column>
          </Grid>

          <Grid container className={`${accordionGrid}`} centered>
            <Grid.Column
              mobile={16}
              tablet={12}
              computer={11}
              verticalAlign="middle">
              <Accordion fluid styled className={`${accordionStyle}`}>
              <H1 textAlign="center" className={`${h1Class}`}>FAQ</H1>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  FAQ
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    This is the content of the area. We can replace any content on this paragraph.
                  </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  FAQ
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <p>
                    This is the content of the area. We can replace any content on this paragraph.
                  </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  FAQ
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <p>
                    This is the content of the area. We can replace any content on this paragraph.
                  </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  FAQ
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <p>
                    This is the content of the area. We can replace any content on this paragraph.
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
          </Grid>

          <Grid container className={`${quotesClass}`} verticalAlign="middle">
            <Grid.Column>
              <div className={`${circleClass}`}/>
                <p>This is the content of the area. We can replace any content on this paragraph.This is the content of the area. We can replace any content on this paragraph.This is the content of the area. We can replace any content on this paragraph.</p>
                <h4>- NATHAN DRAKE</h4>
            </Grid.Column>
          </Grid>
        </Div>

          <Grid container centered>
            <Grid.Column 
            mobile={16}
            tablet={12}
            computer={11}
            verticalAlign='middle'>
              {success ? (
                <p>Thanks! We'll be in touch soon.</p>
              ) : (
                <Form onSubmit={this.submit} loading={submitting} className={`${formClass}`}>
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
          </Grid>

        <Div className={`${footerClass}`}>
          <Grid container verticalAlign="middle">
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              verticalAlign="middle">
              <h2>COMPANY NAME</h2>
              <p>tagline content goes here.</p>
              <br/>
              <h2>Our branch</h2>
              <p>Call US 888 8888</p>
              <p>Email.Support@gmail.com</p>
              <p>2st Blue Location ,City</p>
              <p>7000</p>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              verticalAlign="middle">
              <h2>Our IT branch</h2>
              <p>Info@company.com</p>
              <p>Location, 123 St. City, 2000</p>
            </Grid.Column>
          </Grid>
          <Grid container verticalAlign="middle">
            <Grid.Column>
              <P fontSize="16px!important"> COPYRIGHT 2017 @COmpany All rights reserved. | Terms of Use | Privacy Policy</P>
            </Grid.Column>
          </Grid>
        </Div>
      </Div>
    ]
  }
}
