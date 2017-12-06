import PropTypes from 'prop-types'
import Link from 'next/link'
import { Header, Div, Img, Button } from 'glamorous'
import { HEADER_HEIGHT } from 'constants'

const H = ({ transparency, clear }) => {
  const components = [
    <Header
      padding="10px"
      backgroundColor={transparency ? 'none' : 'rgba(0, 0, 0, .9)'}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="1000"
      transition=".75s all"
      transitionDelay=".25s"
      key="header"
    >
      <Link href="/" prefetch>
        <a>
          <Div height="60px">Logo</Div>
        </a>
      </Link>
    </Header>
  ]

  if (clear) components.push(<Div height={HEADER_HEIGHT} key="clearHeader" />)

  return components
}

H.propTypes = {
  clear: PropTypes.bool,
  transparency: PropTypes.bool
}

H.defaultProps = {
  clear: true,
  transparency: false
}

export default H
