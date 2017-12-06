import moment from 'moment'
import { Div, Footer } from 'glamorous'
import { FOOTER_HEIGHT } from 'constants'

export default () => [
  <Div height={FOOTER_HEIGHT} key="clearFooter" />,
  <Footer
    position="absolute"
    bottom="0px"
    left="0px"
    textAlign="center"
    width="100%"
    borderTop="1px solid #ccc"
    padding="30px"
    key="footer"
  >
    &copy; {moment().format('YYYY')} Project Name. All Rights Reserved.
  </Footer>
]
