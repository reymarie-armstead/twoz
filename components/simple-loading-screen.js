import { Div } from 'glamorous'
import { Loader } from 'semantic-ui-react'

export default ({ children }) => (
  <Div
    height="100vh"
    width="100vw"
    position="fixed"
    top={0}
    left={0}
    key="simpleLoadingScreenDiv"
  >
    <Div marginTop="calc(50vh - 75px)">
      <Loader active inline="centered" size="large">
        {children || 'Loading...'}
      </Loader>
    </Div>
  </Div>
)
