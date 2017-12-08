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
  Table
} from 'semantic-ui-react'
import { Div, H1, H2, P, Span } from 'glamorous'
import store from 'services/store'
import { Router } from 'routes'

const menuclass = css({
  '.ui': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    color: '#000',
    maxWidth: '1600px',
    margin: 'auto !important',
    height: '135px',
    border: '0',
    boxShadow: '0 1px 2px 0 rgba(34,36,38,0)'
  }
})
const menuitem = css({
  fontSize: '22px'
})
const H1class = css({
  fontSize: '50px',
  color: '#242424'
})
const aClass = css({
  color: '#f47d0a'
})
const h3Class = css({
  marginTop: '20px !important',
  fontSize: '20px'
})
const inputClass = css({
  height: '65px !important',
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
    borderRadius: '0'
  }
})
const bannerGrid = css({
  '.ui': {
    maxWidth: '1600px',
    margin: 'auto !important',
    padding: '80px 0 40px',
    backgroundImage: `url('/static/background-copy.png')`,
    backgroundSize: 'initial',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '75% 100%',
    marginBottom: '-14px !important'
  }
})
const imgLogo = css({
  '.ui': {
    display: 'inline-block!important',
    margin: '15px 30px !important'
  }
})

const getFreequote = css({
  '.ui': {
    width: '100%',
    height: '94px',
    fontSize: '30px',
    backgroundColor: '#ec811a',
    color: '#fff',
    textTransform: 'uppercase',
    padding: '15px 30px',
    transition: 'all .5s',
    ':hover': {
      backgroundColor: 'rgba(3, 169, 244, 1)'
    }
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
          <Div height="135px" backgroundColor="#fff">
            <Menu secondary className={`${menuclass}`}>
              <Menu.Item>
                <Image width="260" src="/static/ffc-logo.svg" />
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item onClick={this.handleItemClick}>
                  <Image src="/static/place.png" width="30" spaced />
                  <p className={`${menuitem}`}>
                    <strong>227 Marlon Street</strong> <br />Columbia, SC 29201
                  </p>
                </Menu.Item>
                <Menu.Item onClick={this.handleItemClick}>
                  <Image src="/static/time.png" width="30" spaced />
                  <p className={`${menuitem}`}>
                    <strong>Mon-Sat 7AM-5PM</strong> <br />Sunday CLOSED
                  </p>
                </Menu.Item>
                <Menu.Item onClick={this.handleItemClick}>
                  <Image src="/static/speech.png" width="30" spaced />
                  <p className={`${menuitem}`}>
                    <strong>(847) 252-5126</strong> <br />info@ffc.com
                  </p>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Div>
          <Grid className={`${bannerGrid}`}>
            <Grid.Column mobile={16} tablet={8} computer={6}>
              <H1 fontSize="4vw">WE WILL BUILD YOUR FUTURE</H1>
              <P fontSize="2.1vw">YOUR DREAM IT. WE BUILD IT!</P>
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
            <Grid.Column mobile={16} tablet={8} computer={10}>
              <Div paddingTop="560px">
                <Grid>
                  <Grid.Column mobile={16} tablet={16} computer={10}>
                    <Table className={`${tableClass}`}>
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
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={16} computer={6}>
                    <Div
                      backgroundColor="#f47d0a"
                      color="#fff"
                      paddingBottom="5px"
                    >
                      <P
                        backgroundColor="#fff"
                        color="#f47d0a"
                        fontSize="25px"
                        padding="10px 0 10px 15px"
                        marginBottom="15px"
                      >
                        INQUIRE TO GET STARTED!
                      </P>
                      <P fontSize="25px" paddingLeft="15px" marginBottom="15px">
                        Call us now
                      </P>
                      <H1 fontSize="45px" paddingLeft="15px" marginTop="15px">
                        (847) 252-5126
                      </H1>
                    </Div>
                  </Grid.Column>
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
              <H1 className={`${H1class}`}>OUR SERVICES</H1>
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
                <Div>
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
                <Div>
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
                <Div>
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
                <Div>
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
                <Div>
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
                <Div>
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
                <Div>
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
                <Div>
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
                <Div>
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
              </Div>
            </Grid.Column>
          </Grid>
        </Div>

        <Div
          padding="100px 0 150px"
          margin="0 auto"
          backgroundImage="url('/static/bg-copy2.png')"
          backgroundSize="inherit"
          backgroundRepeat="no-repeat"
          backgroundPosition="center 100%"
          backgroundColor="#f9f9f9"
          color="#686868"
          fontSize="16px"
        >
          <Grid container centered>
            <Grid.Column
              mobile={16}
              tablet={12}
              computer={10}
              textAlign="center"
            >
              <H1 className={`${H1class}`}>WHY CHOOSE US?</H1>
              <P>
                This is a sample text, this will be replaced with an actual
                content. This is a sample text, this will be replaced with an
                actual content. This will be replaced with an actual content.
              </P>
            </Grid.Column>
          </Grid>
          <Grid container centered>
            <Grid.Column floated="left" textAlign="center" width={4}>
              <Div marginTop="100px">
                <Image centered src="/static/engineer.png" />
                <Div>
                  <h3 className={`${h3Class}`}>Title Here</h3>
                  <p>
                    This is a sample text, this will be replaced with an actual
                    content. This is a sample text.
                  </p>
                </Div>
              </Div>
            </Grid.Column>
            <Grid.Column floated="right" textAlign="center" width={4}>
              <Div marginTop="100px">
                <Image centered src="/static/tap.png" />
                <Div>
                  <h3 className={`${h3Class}`}>Title Here</h3>
                  <p>
                    This is a sample text, this will be replaced with an actual
                    content. This is a sample text.
                  </p>
                </Div>
              </Div>
            </Grid.Column>

            <Grid.Row>
              <Grid.Column floated="left" textAlign="center" width={4}>
                <Div marginTop="100px">
                  <Image centered src="/static/light-bulb.png" />
                  <Div>
                    <h3 className={`${h3Class}`}>Title Here</h3>
                    <p>
                      This is a sample text, this will be replaced with an
                      actual content. This is a sample text.
                    </p>
                  </Div>
                </Div>
              </Grid.Column>
              <Grid.Column floated="right" textAlign="center" width={4}>
                <Div marginTop="100px">
                  <Image centered src="/static/paint-roller.png" />
                  <Div>
                    <h3 className={`${h3Class}`}>Title Here</h3>
                    <p>
                      This is a sample text, this will be replaced with an
                      actual content. This is a sample text.
                    </p>
                  </Div>
                </Div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Div>

        <Div backgroundColor=" #f47d0a" color="#fff">
          <Grid container>
            <Grid.Column centered textAlign="center">
              <Div padding="80px 0 70px">
                <H1 fontSize="50px">Call Family First Construction today!</H1>
                <H2 fontSize="36px">(847) 252-5126</H2>
              </Div>
            </Grid.Column>
          </Grid>
        </Div>

        <Div padding="100px 0" backgroundColor="#f9f9f9">
          <Grid centered>
            <Div marginBottom="20px">
              <H1 className={`${H1class}`}>OUR ACCREDITATIONS</H1>
            </Div>
            <Grid.Row vertical>
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
              <H1 className={`${H1class}`}>GALLERY</H1>
              <P marginBottom="50px !important">
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
              <P fontSize="30px" color="#fff">
                Home damaged by fire, water, or mold?
              </P>
              <H1 color="#528bfc" fontSize="50px">
                <Span color="#fff" fontWeight="100">
                  VISIT
                </Span>{' '}
                FAMILY FIRST RESTORATION.COM
              </H1>
              <P color="#fff" fontSize="16px">
                We are experts in water damage repair, mold removal, sewage
                clean up, and fire damage restoration.
              </P>
            </Grid.Column>
          </Grid>
        </Div>

        <Div maxWidth="1600px" margin="auto !important" padding="50px 15px">
          <Grid columns="equal">
            <Grid.Column>
              <Div>
                <p>
                  Family First Construction Copyright &copy; 2017.All Rights
                  Reserved.
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Div>
                <p horizontal>
                  Empowered by{' '}
                  <Image src="/static/a-logo.png" width="20" spaced /> Armstead
                  Inc.
                </p>
              </Div>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Div>
                <Icon name="facebook" color="blue" size="large" />
                <Icon name="twitter" color="blue" size="large" />
                <Icon name="instagram" color="blue" size="large" />
              </Div>
            </Grid.Column>
          </Grid>
        </Div>
      </Div>
    ]
  }
}
