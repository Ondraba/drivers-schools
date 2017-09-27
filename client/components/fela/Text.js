import { createComponent } from 'react-fela'

const Text = createComponent(({ size = 16 }) => ({
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: size,
  color: '#333'
}))

export default Text
