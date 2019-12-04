import { addParameters, configure } from '@storybook/web-components'
import '../src/ui/index.css'
import '../src/ui/theme.css'

const req = require.context('../src', true, /\.stories\.ts$/)
configure(req, module)
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href
    window.history.pushState(null, null, currentLocationHref)
    window.location.reload()
  })
}

addParameters({
  options: {
    storySort: (a, b) => a[1].id.localeCompare(b[1].id)
  }
})
