import { elastic as Menu } from 'react-burger-menu'
import { Button, Div } from 'glamorous'
import { Router } from 'routes'
import { login } from 'services/auth'
import Link from 'next/link'

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '15px',
    top: '28px',
    zIndex: 2000
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    width: '190px'
  },
  bmMenuWrap: {
    zIndex: 3000
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default ({ isAuthenticated }) => (
  <Menu
    pageWrapId="pageWrap"
    outerContainerId="outerContainer"
    right
    styles={styles}
  >
    <Link href="/" prefetch>
      <a>
        <Div height="60px">ABOUT</Div>
      </a>
    </Link>
    <Link href="/" prefetch>
      <a>
        <Div height="60px">CASE STUDY</Div>
      </a>
    </Link>
    <Link href="/" prefetch>
      <a>
        <Div height="60px">SERVICE</Div>
      </a>
    </Link>
    <Link href="/" prefetch>
      <a>
        <Div height="60px">CONTACT</Div>
      </a>
    </Link>
    {isAuthenticated ? (
      <Button
        onClick={() => Router.pushRoute('/logout')}
        background="none"
        border="none"
        color="#fff"
        marginBottom="30px"
        cursor="pointer"
        key="logout"
      >
        LOGOUT
      </Button>

    ) : (
      [
        <Button
          onClick={login}
          background="none"
          border="none"
          color="#fff"
          marginBottom="30px"
          cursor="pointer"
          key="login"
        >
          LOGIN
        </Button>,
        <Button
          onClick={login}
          background="#03a9f4"
          border="none"
          borderRadius="5px"
          color="#fff"
          padding="15px 30px"
          cursor="pointer"
          key="signup"
        >
          SIGNUP
        </Button>
      ]
    )}
  </Menu>
)
