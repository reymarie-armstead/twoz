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

const divMenu = css({
  height: '400px',
  backgroundColor: '#fff',
  '@media(min-width: 768px)': {
    height: '135px'
  }
})
const menuclass = css({
  '.ui': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    color: '#000',
    maxWidth: '1600px',
    margin: 'auto!important',
    height: '135px',
    border: '0',
    boxShadow: '0 1px 2px 0 rgba(34,36,38,0)'
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
const logo = css({
  width: '260px',
  '@media(min-width: 768px)': {
    width: '170px'
  },
  '@media(min-width: 1080px)': {
    width: '260px'
  }
})
const introtxH1 = css({
  fontSize: '39px',
  '@media(min-width: 400px)': {
    fontSize: '50px'
  },
  '@media(min-width: 768px)': {
    fontSize: '70px'
  },
  '@media(min-width: 992px)': {
    fontSize: '4.5vw'
  },
  '@media(min-width: 1597px)': {
    fontSize: '70px'
  }
})
const introtxH2 = css({
  fontSize: '20px',
  '@media(min-width: 400px)': {
    fontSize: '26px'
  },
  '@media(min-width: 768px)': {
    fontSize: '4vw'
  },
  '@media(min-width: 992px)': {
    fontSize: '2.4vw'
  },
  '@media(min-width: 1597px)': {
    fontSize: '40px'
  }
})

const h1Class = css({
  fontSize: '34px',
  color: '#242424',
  '@media(min-width: 480px)': {
    fontSize: '50px'
  }
})
const aClass = css({
  color: '#f47d0a'
})
const h3Class = css({
  marginTop: '20px!important',
  fontSize: '20px'
})
const inputClass = css({
  height: '65px!important',
  fontSize: '18px'
})
const cellClass = css({
  borderTop: 'transparent!important'
})
const tableClass = css({
  '.ui': {
    border: 'transparent!important',
    backgroundColor: 'rgba(255, 255, 255, .7)',
    fontSize: '18px',
    borderRadius: '0',
    padding: '0!important',
    marginTop: '14px!important'
  }
})
const tableWidth = css({
  '.ui': {
    width: '573px',
    marginRight: '10px'
  }
})
const inquireWidth = css({
  width: '300px',
  backgroundColor: '#f47d0a',
  color: '#fff',
  paddingBottom: '5px',
  paddingLeft: '0!important',
  paddingRight: '0!important',
  marginLeft: '14px',
  '@media(min-width: 400px)': {
    width: '380px',
    marginTop: '30px'
  },
  '@media(min-width: 992px)': {
    marginTop: '30px'
  }
})
const inquireP1 = css({
  backgroundColor: '#fff',
  color: '#f47d0a',
  fontSize: '22px',
  padding: '10px 0 10px 15px',
  marginBottom: '15px',
  '@media(min-width: 400px)': {
    fontSize: '25px'
  }
})

const inquireH1 = css({
  fontSize: '38px',
  paddingLeft: '15px',
  marginTop: '15px',
  '@media(min-width: 400px)': {
    fontSize: '45px'
  }
})
const spacer = css({
  padding: '0',
  '@media(min-width: 992px)': {
    padding: '155px'
  },
  '@media(min-width: 1548px)': {
    padding: '255px'
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
    maxWidth: '1600px',
    margin: 'auto!important',
    padding: '40px 0 40px',
    '@media(min-width: 500px)': {
      padding: '80px 0 40px',
      backgroundSize: 'initial',
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
    backgroundSize: 'inherit',
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
    backgroundColor: '#ec811a',
    color: '#fff',
    textTransform: 'uppercase',
    padding: '15px 30px',
    transition: 'all .5s',
    '@media(min-width: 400px)': {
      fontSize: '30px',
      height: '94px'
    },
    ':hover': {
      backgroundColor: 'rgba(3, 169, 244, 1)'
    }
  }
})
const footerClass = css({
  padding: '20px 10px',
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
  render() {
    return [
      <Head key="head">
        <title>Landing Page</title>
      </Head>,
      <Div key="body">
        <Div backgroundImage="url('/static/bg.png')" backgroundSize="cover">
          <Div className={`${divMenu}`}>
            <Menu secondary stackable className={`${menuclass}`}>
              <Menu.Item>
                <Image className={`${logo}`} src="/static/ffc-logo.svg" />
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item onClick={this.handleItemClick}>
                  <Image
                    src="/static/place.png"
                    className={`${menuicon}`}
                    spaced
                  />
                  <p className={`${menuitem}`}>
                    <strong>227 Marlon Street</strong> <br />Columbia, SC 29201
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
                    <strong>(847) 252-5126</strong> <br />info@ffc.com
                  </p>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Div>
          <Grid className={`${bannerGrid}`} centered>
            <Grid.Column mobile={16} tablet={12} computer={6}>
              <H1 className={`${introtxH1}`}>WE WILL BUILD YOUR FUTURE</H1>
              <H2 className={`${introtxH2}`}>YOU DREAM IT. WE BUILD IT!</H2>
              <Form>
                <Form.Field>
                  <input placeholder="Name" className={`${inputClass}`} />
                </Form.Field>
                <Form.Field>
                  <input placeholder="Email" className={`${inputClass}`} />
                </Form.Field>
                <Form.Field>
                  <input placeholder="Phone" className={`${inputClass}`} />
                </Form.Field>
                <Form.TextArea rows="5" placeholder="Message" />
                <Button type="submit" className={`${getFreequote}`}>
                  GET A FREE QUOTE
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={10}>
              <Div>
                <Div className={`${spacer}`} />
                <Grid>
                  <Responsive className={`${tableWidth}`} minWidth={768}>
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
                  <Grid>
                    <Div className={`${inquireWidth}`}>
                      <P className={`${inquireP1}`}>INQUIRE TO GET STARTED!</P>
                      <P fontSize="25px" paddingLeft="15px" marginBottom="15px">
                        Call us now
                      </P>
                      <H1 className={`${inquireH1}`}>(847) 252-5126</H1>
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
                This is a sample text, this will be replaced with an actual
                content. This is a sample text, this will be replaced with an
                actual content. This will be replaced with an actual content.
              </P>
            </Grid.Column>
          </Grid>

          <Grid container textAlign="center" centered>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              centered
            >
              <Div marginTop="50px">
                <Image centered src="/static/design-1.jpg" />
                <h3 className={`${h3Class}`}>Kitchen</h3>
                <p>
                  This is a sample text, this will be replaced with an actual
                  content. This is a sample text.
                </p>
                <p>
                  <a className={`${aClass}`} href="">
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              centered
            >
              <Div marginTop="50px">
                <Image centered src="/static/design-2.jpg" />
                <h3 className={`${h3Class}`}>Bathroom</h3>
                <p>
                  This is a sample text, this will be replaced with an actual
                  content. This is a sample text.
                </p>
                <p>
                  <a className={`${aClass}`} href="">
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              centered
            >
              <Div marginTop="50px">
                <Image centered src="/static/design-3.jpg" />
                <h3 className={`${h3Class}`}>Basements</h3>
                <p>
                  This is a sample text, this will be replaced with an actual
                  content. This is a sample text.
                </p>
                <p>
                  <a className={`${aClass}`} href="">
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>

            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              centered
            >
              <Div marginTop="50px">
                <Image centered src="/static/design-4.jpg" />
                <h3 className={`${h3Class}`}>Hardwood</h3>
                <p>
                  This is a sample text, this will be replaced with an actual
                  content. This is a sample text.
                </p>
                <p>
                  <a className={`${aClass}`} href="">
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              centered
            >
              <Div marginTop="50px">
                <Image centered src="/static/design-5.jpg" />
                <h3 className={`${h3Class}`}>Floor</h3>
                <p>
                  This is a sample text, this will be replaced with an actual
                  content. This is a sample text.
                </p>
                <p>
                  <a className={`${aClass}`} href="">
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              centered
            >
              <Div marginTop="50px">
                <Image centered src="/static/design-6.jpg" />
                <h3 className={`${h3Class}`}>Carpet</h3>
                <p>
                  This is a sample text, this will be replaced with an actual
                  content. This is a sample text.
                </p>
                <p>
                  <a className={`${aClass}`} href="">
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>

            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              centered
            >
              <Div marginTop="50px">
                <Image centered src="/static/design-7.jpg" />
                <h3 className={`${h3Class}`}>Tiles Sales & Installation</h3>
                <p>
                  This is a sample text, this will be replaced with an actual
                  content. This is a sample text.
                </p>
                <p>
                  <a className={`${aClass}`} href="">
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              centered
            >
              <Div marginTop="50px">
                <Image centered src="/static/design-8.jpg" />
                <h3 className={`${h3Class}`}>Concrete Repairs</h3>
                <p>
                  This is a sample text, this will be replaced with an actual
                  content. This is a sample text.
                </p>
                <p>
                  <a className={`${aClass}`} href="">
                    LEARN MORE
                  </a>
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={5}
              verticalAlign="middle"
              centered
            >
              <Div marginTop="50px">
                <Image centered src="/static/design-9.jpg" />
                <h3 className={`${h3Class}`}>Structural Repairs</h3>
                <p>
                  This is a sample text, this will be replaced with an actual
                  content. This is a sample text.
                </p>
                <p>
                  <a className={`${aClass}`} href="">
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
                This is a sample text, this will be replaced with an actual
                content. This is a sample text, this will be replaced with an
                actual content. This will be replaced with an actual content.
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
                  <h3 className={`${h3Class}`}>Title Here</h3>
                  <p>
                    This is a sample text, this will be replaced with an actual
                    content. This is a sample text.
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
                  <h3 className={`${h3Class}`}>Title Here</h3>
                  <p>
                    This is a sample text, this will be replaced with an actual
                    content. This is a sample text.
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
                  <h3 className={`${h3Class}`}>Title Here</h3>
                  <p>
                    This is a sample text, this will be replaced with an actual
                    content. This is a sample text.
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
                  <h3 className={`${h3Class}`}>Title Here</h3>
                  <p>
                    This is a sample text, this will be replaced with an actual
                    content. This is a sample text.
                  </p>
                </Div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Div>

        <Div backgroundColor=" #f47d0a" color="#fff">
          <Grid container>
            <Grid.Column centered textAlign="center">
              <Div padding="80px 0 70px">
                <Text is="h1" f={[2, 1, 1]}>
                  Call Family First Construction today!
                </Text>
                <Text is="h2" f={[3, 2, 2]}>
                  (847) 252-5126
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
                This is a sample text, this will be replaced with an actual
                content. This is a sample text, this will be replaced with an
                actual content. This will be replaced with an actual content.
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
              <Image centered src="/static/view-more.png" />
            </Grid.Column>
          </Grid>
        </Div>

        <Div backgroundColor="#1d273b" padding="100px 0">
          <Grid container centered>
            <Grid.Column textAlign="center">
              <Text is="h2" f={[4, null, 3, 2]}>
                <Span color="#fff">Home damaged by fire, water, or mold?</Span>
              </Text>
              <Text is="h1" f={[3, null, 1, 1]}>
                <Span color="#fff" fontWeight="100">
                  VISIT
                </Span>{' '}
                <Span color="#528bfc" fontWeight="700">
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
        </Div>

        <Div className={`${footerClass}`}>
          <Grid>
            <Grid.Row columns={3} only="tablet computer">
              <Grid.Column>
                <p>
                  Family First Construction Copyright &copy; 2017.All Rights
                  Reserved.
                </p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <p horizontal>
                  Empowered by{' '}
                  <Image src="/static/a-logo.png" width="20" spaced /> Armstead
                  Inc.
                </p>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <Icon name="facebook" color="blue" size="large" />
                <Icon name="twitter" color="blue" size="large" />
                <Icon name="instagram" color="blue" size="large" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row only="mobile">
              <Grid.Column width="16" textAlign="center">
                <p>
                  Family First Construction Copyright &copy; 2017.All Rights
                  Reserved.
                </p>
              </Grid.Column>
              <Grid.Column width="16" textAlign="center">
                <Div marginTop="10px">
                  <p horizontal>
                    Empowered by{' '}
                    <Image src="/static/a-logo.png" width="20" spaced />{' '}
                    Armstead Inc.
                  </p>
                </Div>
              </Grid.Column>
              <Grid.Column width="16" textAlign="center">
                <Div marginTop="5px">
                  <Icon name="facebook" color="blue" size="large" />
                  <Icon name="twitter" color="blue" size="large" />
                  <Icon name="instagram" color="blue" size="large" />
                </Div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Div>
      </Div>
    ]
  }
}
