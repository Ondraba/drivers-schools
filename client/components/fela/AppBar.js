import { createComponent } from 'react-fela'

const AppBar = createComponent(({ 
  backgroundColor = '#e5e5e5',
  color = '#333'
}) => ({
  lineHeight: 1.5,
  height: 80,
  backgroundColor,
  color
}))

export default AppBar
