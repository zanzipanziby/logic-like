import type { Preview } from '@storybook/react'

import '@fontsource-variable/nunito'
import '../src/styles/index.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
