import { createComponent } from 'react-fela'

const AppBar = createComponent(({ 
  backgroundColor = '#e5e5e5',
  color = '#333'
}) => ({
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.5,
  paddingLeft: 15,
  paddingRight: 15,
  height: 80,
  backgroundColor,
  color
}))

export default AppBar
