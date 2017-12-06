import { Div } from 'glamorous'
import { Loader } from 'semantic-ui-react'
import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'constants'

const halfOfLoaderHeight = '39px'

export default ({ children }) => (
  <Div
    height="100vh"
    width="100vw"
    position="fixed"
    top={0}
    left={0}
    key="pageLoaderDiv"
  >
    <Div
      marginTop={`calc(((100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT}) / 2) + ${
        halfOfLoaderHeight
      })`}
    >
      <Loader active inline="centered" size="large">
        {children || 'Loading...'}
      </Loader>
    </Div>
  </Div>
)
