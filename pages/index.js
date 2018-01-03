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
  Responsive
} from 'semantic-ui-react'
import { Div, H1, H2, P, Span } from 'glamorous'
import { Text } from 'axs'
import store from 'services/store'
import { Router } from 'routes'

css.global('*', { fontFamily: `'Open Sans', 'Oswald', sans-serif` })

const primaryColor = '#F27D26'

const divMenu = css({
  height: '200px',
  backgroundColor: '#fff',
  '@media(min-width: 768px)': {
    height: '135px'
  }
})
const menuclass = css({
  '.ui': {
    width: '260px!important',
    margin: '0 auto!important',
    '@media(min-width: 768px)': {
      maxWidth: '1600px',
      width: '100%!important',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: '#000',
      margin: 'auto!important',
      height: '135px',
      border: '0',
      boxShadow: '0 1px 2px 0 rgba(34,36,38,0)'
    }
  }
})
const menuitem = css({
  fontSize: '22px',
  '@media(min-width: 768px)': {
    fontSize: '14px'
  },
  '@media(min-width: 1080px)': {
    fontSize: '22px'
  }
})
const menuicon = css({
  width: '30px',
  '@media(min-width: 768px)': {
    width: '24px'
  }
})
const menuRight = css({
  '@media(max-width: 767px)': {
    display: 'none!important'
  }
})
const mobilemenu = css({
  width: '230px!important',
  margin: '0 auto',
  textAlign: 'center',
  '@media(min-width: 768px)': {
    display: 'none!important'
  }
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
const introtxH1 = css({
  fontFamily: `'Oswald', sans-serif`,
  fontSize: '39px',
  color: '#242424',
  '@media(min-width: 400px)': {
    fontSize: '50px'
  },
  '@media(min-width: 768px)': {
    fontSize: '70px'
  },
  '@media(min-width: 992px)': {
    fontSize: '45px'
  },
  '@media(min-width: 1200px)': {
    fontSize: '54px'
  }
})
const introtxH2 = css({
  fontFamily: `'Oswald', sans-serif`,
  fontWeight: '600',
  color: '#555555',
  fontSize: '20px',
  '@media(min-width: 400px)': {
    fontSize: '26px'
  },
  '@media(min-width: 768px)': {
    fontSize: '40px'
  },
  '@media(min-width: 992px)': {
    fontSize: '24px'
  },
  '@media(min-width: 1200px)': {
    fontSize: '28px'
  }
})

const h1Class = css({
  fontFamily: `'Oswald', sans-serif`,
  fontWeight: '400',
  fontSize: '34px',
  color: '#242424',
  '@media(min-width: 480px)': {
    fontSize: '50px'
  }
})

const aWhite = css({
  fontFamily: `'Oswald', sans-serif`,
  fontWeight: '600',
  color: '#fff'
})
const aBlack = css({
  color: 'rgba(0,0,0,.87)',
  ':hover': {
    color: 'rgba(0,0,0,.87)'
  }
})
const aClass = css({
  color: '#f47d0a'
})
const h3Class = css({
  fontFamily: `'Oswald', sans-serif`,
  fontWeight: '400',
  marginTop: '20px!important',
  fontSize: '20px'
})
const inputClass = css({
  fontSize: '18px'
})
const cellClass = css({
  borderTop: 'transparent!important'
})
const tableClass = css({
  '.ui': {
    fontFamily: `'Oswald', sans-serif`,
    width: '94vw',
    border: 'transparent!important',
    backgroundColor: 'rgba(255, 255, 255, .7)',
    fontSize: '13px',
    borderRadius: '0',
    padding: '0!important',
    display: 'none',
    marginBottom: '15px!important',
    '@media(min-width: 480px)': {
      display: 'block'
    },
    '@media(min-width: 718px)': {
      width: 'auto'
    }
  }
})
const tableWidth = css({
  '.ui': {
    '@media(max-width: 480px)': {
      display: 'none'
    }
  }
})
const inquireWidth = css({
  width: '94vw',
  backgroundColor: primaryColor,
  color: '#fff',
  paddingBottom: '5px',
  paddingLeft: '0!important',
  paddingRight: '0!important',
  marginBottom: '15px',
  marginTop: '14px',
  marginLeft: '15px',
  '@media(min-width: 718px)': {
    width: '282px',
    marginRight: '0px'
  }
})
const inquireP1 = css({
  backgroundColor: '#fff',
  color: primaryColor,
  fontSize: '22px',
  padding: '10px 15px 10px 15px',
  marginBottom: '15px',
  '@media(min-width: 400px)': {
    fontSize: '20px'
  }
})

const inquireH1 = css({
  fontSize: '38px',
  paddingLeft: '15px',
  marginTop: '10px',
  color: '#fff',
  '@media(min-width: 400px)': {
    fontSize: '36px'
  }
})
const spacer = css({
  padding: '0',
  '@media(min-width: 992px)': {
    padding: '165px'
  },
  '@media(min-width: 1200px)': {
    padding: '261px'
  }
})
const spacer2 = css({
  padding: '0',
  '@media(min-width: 768px)': {
    padding: '35px'
  }
})
const bannerGrid = css({
  '.ui': {
    margin: 'auto!important',
    padding: '40px 0 40px',
    '@media(min-width: 500px)': {
      padding: '80px 0 40px',
      backgroundSize: '500px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '75% 100%',
      marginBottom: '-14px!important',
      backgroundImage: `url('/static/background-copy.png')`
    }
  }
})
const chooseGrid = css({
  padding: '100px 0 150px',
  backgroundColor: '#f9f9f9',
  color: '#686868',
  fontSize: '16px',
  margin: '0 auto',
  '@media(min-width: 768px)': {
    backgroundImage: "url('/static/bg-copy2.png')",
    backgroundSize: '400px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 100%'
  }
})

const imgLogo = css({
  '.ui': {
    display: 'inline-block!important',
    margin: '15px 15px!important',
    '@media(min-width: 768px)': {
      margin: '15px 30px!important'
    }
  }
})

const getFreequote = css({
  '.ui': {
    width: '100%',
    height: '70px',
    fontSize: '22px',
    backgroundColor: primaryColor,
    color: '#fff',
    textTransform: 'uppercase',
    padding: '15px 30px',
    transition: 'all .5s',
    '@media(min-width: 400px)': {
      fontSize: '30px',
      height: '94px'
    },
    ':hover': {
      backgroundColor: primaryColor,
      color: '#fff'
    }
  }
})
const footerClass = css({
  padding: '40px 10px',
  '@media(min-width: 768px)': {
    padding: '50px 15px',
    maxWidth: '1600px',
    margin: 'auto!important'
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
    phone: '',
    message: '',
    submitting: false,
    success: false
  }
  submit = async () => {
    this.setState({ submitting: true })

    const { name, email, phone, message } = this.state

    const data = await request
      .post('https://contact-form.ams.armstead.io/')
      .send({
        receivers: ['familyfirstrestoration@live.com'],
        subject: 'Family First Construction Web Inquiry',
        body: `
          Name: ${name}\r
          Email: ${email}\r
          Phone: ${phone}\r
          ---\r\r
          ${message}
        `
      })

    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
      submitting: false,
      success: true
    })

    setTimeout(() => this.setState({ success: false }), 5000)
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  render() {
    const { name, email, phone, message, submitting, success } = this.state

    return [
      <Head key="head">
        <title>Family First Construction</title>
      </Head>,
      <Div key="body">
        <Div backgroundImage="url('/static/bg.png')" backgroundSize="cover">
          <Div className={`${divMenu}`}>
            <Menu secondary stackable className={`${menuclass}`} centered>
              <Menu.Item>
                <Image className={`${logo}`} src="/static/ffc-logo.svg" />
              </Menu.Item>
              <Menu.Item
                onClick={this.handleItemClick}
                className={`${mobilemenu}`}
              >
                <Image
                  src="/static/speech.png"
                  className={`${menuicon}`}
                  spaced
                />
                <p className={`${menuitem}`}>
                  <a className={`${aBlack}`} href="tel:+8472525126">
                    <strong>(847) 252-5126</strong>
                  </a>{' '}
                  <br />
                  <a
                    className={`${aBlack}`}
                    href="mailto:familyfirstrestoration@live.com"
                  >
                    Email Us
                  </a>
                </p>
              </Menu.Item>
              <Menu.Menu position="right" className={`${menuRight}`}>
                <Menu.Item onClick={this.handleItemClick}>
                  <Image
                    src="/static/place.png"
                    className={`${menuicon}`}
                    spaced
                  />
                  <p className={`${menuitem}`}>
                    <strong>Chicago, Northbrook</strong> <br />&amp; surrounding
                    areas
                  </p>
                </Menu.Item>
                <Menu.Item onClick={this.handleItemClick}>
                  <Image
                    src="/static/time.png"
                    className={`${menuicon}`}
                    spaced
                  />
                  <p className={`${menuitem}`}>
                    <strong>Mon-Sat 7AM-5PM</strong> <br />Sunday CLOSED
                  </p>
                </Menu.Item>
                <Menu.Item onClick={this.handleItemClick}>
                  <Image
                    src="/static/speech.png"
                    className={`${menuicon}`}
                    spaced
                  />
                  <p className={`${menuitem}`}>
                    <a className={`${aBlack}`} href="tel:+8472525126">
                      <strong>(847) 252-5126</strong>
                    </a>{' '}
                    <br />
                    <a
                      className={`${aBlack}`}
                      href="mailto:familyfirstrestoration@live.com"
                    >
                      Email Us
                    </a>
                  </p>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Div>
          <Grid container className={`${bannerGrid}`} centered>
            <Grid.Column mobile={16} tablet={16} computer={6}>
              <H1 className={`${introtxH1}`}>WE WILL BUILD YOUR FUTURE</H1>
              <H2 className={`${introtxH2}`}>YOU DREAM IT. WE BUILD IT!</H2>
              {success ? (
                <p>Thanks! We'll be in touch soon.</p>
              ) : (
                <Form onSubmit={this.submit} loading={submitting}>
                  <Form.Input
                    name="name"
                    value={name}
                    placeholder="Name"
                    className={`${inputClass}`}
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Input
                    name="email"
                    value={email}
                    placeholder="Email"
                    className={`${inputClass}`}
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Input
                    name="phone"
                    value={phone}
                    placeholder="Phone"
                    className={`${inputClass}`}
                    onChange={this.handleChange}
                    required
                  />
                  <Form.TextArea
                    name="message"
                    value={message}
                    rows="6"
                    placeholder="Message"
                    className={`${inputClass}`}
                    onChange={this.handleChange}
                    required
                  />
                  <Button type="submit" className={`${getFreequote}`}>
                    GET A FREE QUOTE
                  </Button>
                </Form>
              )}
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={10}>
              <Div>
                <Div className={`${spacer}`} />
                <Grid>
                  <Responsive className={`${tableWidth}`}>
                    <Table unstackable className={`${tableClass}`}>
                      <Table.Header>
                        <Table.Row>
                          <Table.Cell colspan="3">
                            <strong>CAPABILITIES AND SERVICES</strong>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell className={`${cellClass}`}>
                            KITCHEN
                          </Table.Cell>
                          <Table.Cell className={`${cellClass}`}>
                            HARDWOOD
                          </Table.Cell>
                          <Table.Cell className={`${cellClass}`}>
                            TILES SALES & INSTALLATION
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell className={`${cellClass}`}>
                            BATHROOM
                          </Table.Cell>
                          <Table.Cell className={`${cellClass}`}>
                            FLOORS
                          </Table.Cell>
                          <Table.Cell className={`${cellClass}`}>
                            CONCRETE REPAIRS
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell className={`${cellClass}`}>
                            BASEMENTS
                          </Table.Cell>
                          <Table.Cell className={`${cellClass}`}>
                            CARPET
                          </Table.Cell>
                          <Table.Cell className={`${cellClass}`}>
                            STRUCTURAL REPAIRS
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Responsive>
                  <Grid marginTop="0">
                    <Div className={`${inquireWidth}`}>
                      <P className={`${inquireP1}`}>INQUIRE TO GET STARTED!</P>
                      <P fontSize="22px" paddingLeft="15px" marginBottom="5px">
                        Call us now
                      </P>
                      <a href="tel:+8472525126">
                        <H1 className={`${inquireH1}`}>(847) 252-5126</H1>
                      </a>
                    </Div>
                  </Grid>
                </Grid>
              </Div>
            </Grid.Column>
          </Grid>
        </Div>

        <Div padding="100px 0" color="#686868" fontSize="16px">
          <Grid container textAlign="center" centered>
            <Grid.Column
              mobile={16}
              tablet={12}
              computer={10}
              verticalAlign="middle"
            >
              <H1 className={`${h1Class}`}>OUR SERVICES</H1>
              <P>
                Family First Construction offers several services to accomodate
                your every construction need. Below is a list of examples of
                some of the things we can do for you.
              </P>
            </Grid.Column>
          </Grid>

          <Grid container textAlign="center">
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Div marginTop="50px">
                <Image centered src="/static/design-1.jpg" />
                <h3 className={`${h3Class}`}>Kitchen</h3>
                <p>
                  Complete Kitchens from countertops to plumbing. You decide
                  what you prefer. We will make it come true.
                </p>
                <p>
                  <a className={`${aClass}`} href="" hidden>
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Div marginTop="50px">
                <Image centered src="/static/design-2.jpg" />
                <h3 className={`${h3Class}`}>Bathroom</h3>
                <p>
                  Big or Small any kitchen design is possible. From new
                  construction to a complete remodel.
                </p>
                <p>
                  <a className={`${aClass}`} href="" hidden>
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Div marginTop="50px">
                <Image centered src="/static/design-3.jpg" />
                <h3 className={`${h3Class}`}>Basements</h3>
                <p>
                  We specialize in complete Basement Remodeling. From Custom
                  bars to Regular layouts. No Job is to big or small.
                </p>
                <p>
                  <a className={`${aClass}`} href="" hidden>
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>

            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Div marginTop="50px">
                <Image centered src="/static/design-4.jpg" />
                <h3 className={`${h3Class}`}>Hardwood</h3>
                <p>
                  We Sell and install all wood. From Bamboo to Oak or Maple.
                  Every sample is available.
                </p>
                <p>
                  <a className={`${aClass}`} href="" hidden>
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Div marginTop="50px">
                <Image centered src="/static/design-5.jpg" />
                <h3 className={`${h3Class}`}>Floor</h3>
                <p>Complete Floor installation. Every Material is available.</p>
                <p>
                  <a className={`${aClass}`} href="" hidden>
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Div marginTop="50px">
                <Image centered src="/static/design-6.jpg" />
                <h3 className={`${h3Class}`}>Carpet</h3>
                <p>
                  We Sell and Install carpet. Numerous Samples available. We
                  also do carpet repairs and restrech.
                </p>
                <p>
                  <a className={`${aClass}`} href="" hidden>
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>

            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Div marginTop="50px">
                <Image centered src="/static/design-7.jpg" />
                <h3 className={`${h3Class}`}>Tiles Sales & Installation</h3>
                <p>Call for price, samples and install availability.</p>
                <p>
                  <a className={`${aClass}`} href="" hidden>
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Div marginTop="50px">
                <Image centered src="/static/design-8.jpg" />
                <h3 className={`${h3Class}`}>Concrete Repairs</h3>
                <p>
                  Concrete new or need a repair. Just give us a call to help.
                </p>
                <p>
                  <a className={`${aClass}`} href="" hidden>
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Div marginTop="50px">
                <Image centered src="/static/design-9.jpg" />
                <h3 className={`${h3Class}`}>Structural Repairs</h3>
                <p>
                  Foundation Waterproofing. Injections. Underpinning. Helical
                  Anchors. Carbon Fiber Reinforcement. Kevlar Reinforcement and
                  much more. All Have warranty that is transferable !!!
                </p>
                <p>
                  <a className={`${aClass}`} href="" hidden>
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
          </Grid>
        </Div>

        <Div className={`${chooseGrid}`}>
          <Grid container centered>
            <Grid.Column
              mobile={16}
              tablet={12}
              computer={10}
              textAlign="center"
            >
              <H1 className={`${h1Class}`}>WHY CHOOSE US?</H1>
              <P>
                At Family First Restoration, we pride ourselves on customer
                service. You, the customer, ALWAYS comes first. Our business
                exists to help you.
              </P>
            </Grid.Column>
          </Grid>
          <Grid container centered>
            <Grid.Row>
              <Grid.Column
                floated="left"
                textAlign="center"
                mobile={16}
                tablet={4}
                computer={4}
              >
                <Div className={`${spacer2}`} />
                <Div margin="30px auto 0" maxWidth="300px">
                  <Image centered src="/static/engineer.png" />
                  <h3 className={`${h3Class}`}>Project Management</h3>
                  <p>
                    All projects are managed by top of the line industry
                    professionals.
                  </p>
                </Div>
              </Grid.Column>
              <Grid.Column
                floated="right"
                textAlign="center"
                mobile={16}
                tablet={4}
                computer={4}
              >
                <Div className={`${spacer2}`} />
                <Div margin="30px auto 0" maxWidth="300px">
                  <Image centered src="/static/tap.png" />
                  <h3 className={`${h3Class}`}>The Kitchen Sink</h3>
                  <p>
                    Our unique background in restoration and our diverse
                    toolsets help us to approach every project from the best
                    angles possible.
                  </p>
                </Div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column
                floated="left"
                textAlign="center"
                mobile={16}
                tablet={4}
                computer={4}
              >
                <Div className={`${spacer2}`} />
                <Div margin="30px auto 0" maxWidth="300px">
                  <Image centered src="/static/light-bulb.png" />
                  <h3 className={`${h3Class}`}>Bright Ideas</h3>
                  <p>
                    Our team is trained to approach each project with utmost
                    care &amp; knowledge.
                  </p>
                </Div>
              </Grid.Column>
              <Grid.Column
                floated="right"
                textAlign="center"
                mobile={16}
                tablet={4}
                computer={4}
              >
                <Div className={`${spacer2}`} />
                <Div margin="30px auto 0" maxWidth="300px">
                  <Image centered src="/static/paint-roller.png" />
                  <h3 className={`${h3Class}`}>Finishing</h3>
                  <p>From A to Z, our projects are finished to inspire.</p>
                </Div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Div>

        <Div backgroundColor={primaryColor} color="#fff">
          <Grid container>
            <Grid.Column centered textAlign="center">
              <Div padding="80px 0 70px">
                <Text is="h1" f={[2, 1, 1]}>
                  <Span fontFamily="'Oswald', sans-serif">
                    {' '}
                    Call Family First Construction Today!
                  </Span>
                </Text>
                <Text is="h2" f={[3, 2, 2]}>
                  <a className={`${aWhite}`} href="tel:+8472525126">
                    (847) 252-5126
                  </a>
                </Text>
              </Div>
            </Grid.Column>
          </Grid>
        </Div>

        <Div padding="100px 10px" backgroundColor="#f9f9f9">
          <Grid centered>
            <Div marginBottom="20px">
              <H1 className={`${h1Class}`}>OUR ACCREDITATIONS</H1>
            </Div>
            <Grid.Row>
              <Grid.Column centered textAlign="center">
                <Image.Group>
                  <Image src="/static/otc-logo.png" className={`${imgLogo}`} />
                  <Image src="/static/iri.png" className={`${imgLogo}`} />
                  <Image src="/static/iicrc.png" className={`${imgLogo}`} />
                  <Image src="/static/noa-logo.png" className={`${imgLogo}`} />
                  <Image src="/static/fortress.png" className={`${imgLogo}`} />
                  <Image src="/static/icri.png" className={`${imgLogo}`} />
                </Image.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Div>

        <Div padding="100px 0" color="#686868" fontSize="16px">
          <Grid container centered>
            <Grid.Column
              mobile={16}
              tablet={14}
              computer={10}
              textAlign="center"
            >
              <H1 className={`${h1Class}`}>GALLERY</H1>
              <P marginBottom="50px!important">
                Just a few examples of our gallery to leave you feeling inspired
                to start your next project.
              </P>
            </Grid.Column>
          </Grid>

          <Grid container centered>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              textAlign="center"
            >
              <Image centered src="/static/imagegen.jpg" />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              textAlign="center"
            >
              <Image centered src="/static/construction.jpg" />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              textAlign="center"
            >
              <a href="https://familyfirstrestoration.com/photos">
                <Image centered src="/static/view-more.png" />
              </a>
            </Grid.Column>
          </Grid>
        </Div>

        <Div backgroundColor="#1d273b" padding="100px 0">
          <a href="https://familyfirstrestoration.com">
            <Grid container centered>
              <Grid.Column textAlign="center">
                <Text is="h2" f={[4, null, 3, 2]}>
                  <Span
                    color="#fff"
                    fontFamily="'Oswald', sans-serif"
                    fontWeight="400"
                  >
                    Home damaged by fire, water, or mold?
                  </Span>
                </Text>
                <Text is="h1" f={[3, null, 1, 1]}>
                  <Span color="#fff" fontWeight="100">
                    VISIT
                  </Span>{' '}
                  <Span
                    color="#528bfc"
                    fontFamily="'Oswald', sans-serif"
                    fontWeight="700"
                  >
                    {' '}
                    FAMILY FIRST RESTORATION.COM
                  </Span>
                </Text>
                <P color="#fff" fontSize="16px">
                  We are experts in water damage repair, mold removal, sewage
                  clean up, and fire damage restoration.
                </P>
              </Grid.Column>
            </Grid>
          </a>
        </Div>

        <Div className={`${footerClass}`}>
          <Grid>
            <Grid.Row only="computer">
              <Grid.Column computer={7}>
                <p>
                  Family First Construction Copyright &copy; 2017. All Rights
                  Reserved.
                </p>
              </Grid.Column>
              <Grid.Column textAlign="left" computer={5}>
                <p horizontal>
                  <a href="https://armstead.io" className={`${aBlack}`}>
                    Empowered by{' '}
                    <Image src="/static/a-logo.png" width="20" spaced />{' '}
                    Armstead Inc.
                  </a>
                </p>
              </Grid.Column>
              <Grid.Column textAlign="right" computer={4}>
                <a
                  href="https://www.facebook.com/Familyfirstrestoration"
                  target="_blank"
                >
                  <Icon name="facebook" color="blue" size="large" />
                </a>
                <a
                  href="https://www.linkedin.com/in/martin-russo-6648b797"
                  target="_blank"
                >
                  <Icon name="linkedin" color="blue" size="large" />
                </a>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row only="mobile tablet">
              <Grid.Column width="16" textAlign="center">
                <p>
                  Family First Construction Copyright &copy; 2017. All Rights
                  Reserved.
                </p>
              </Grid.Column>
              <Grid.Column width="16" textAlign="center">
                <Div marginTop="10px">
                  <p horizontal>
                    <a href="https://armstead.io" className={`${aBlack}`}>
                      Empowered by{' '}
                      <Image src="/static/a-logo.png" width="20" spaced />{' '}
                      Armstead Inc.
                    </a>
                  </p>
                </Div>
              </Grid.Column>
              <Grid.Column width="16" textAlign="center">
                <Div marginTop="5px">
                  <a
                    href="https://www.facebook.com/Familyfirstrestoration"
                    target="_blank"
                  >
                    <Icon name="facebook" color="blue" size="large" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/martin-russo-6648b797"
                    target="_blank"
                  >
                    <Icon name="linkedin" color="blue" size="large" />
                  </a>
                </Div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Div>
      </Div>
    ]
  }
}
