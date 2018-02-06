import 'glamor/reset'
import PropTypes from 'prop-types'
import { Div } from 'glamorous'
import { css } from 'glamor'
import { connect } from 'react-redux'
import MobileMenu from 'components/mobile-menu'
import Header from 'components/header'
import Footer from 'components/footer'
import Loader from 'components/page-loader'

css.global('*', { fontFamily: `'Montserrat', sans-serif` })

const Default = ({
  children,
  accessToken,
  pageIsLoading,
  pageError,
  clearHeader,
  transparency
}) => (
  <Div id="outerContainer" position="relative" minHeight="100vh">
    <MobileMenu isAuthenticated={accessToken} />
    <Div id="pageWrap">
      <Header clear={clearHeader} transparency={transparency} />
      {pageError && (
        <Div>There has been an error, please refresh the page!</Div>
      )}
      {!pageError && pageIsLoading && <Loader />}
      {!pageError && !pageIsLoading && children}
      <Footer />
    </Div>
  </Div>
)

Default.propTypes = {
  clearHeader: PropTypes.bool,
  transparency: PropTypes.bool
}

const mapState = ({
  auth: { accessToken },
  ui: { pageIsLoading, pageError }
}) => ({ accessToken, pageIsLoading })

export default connect(mapState)(Default)
