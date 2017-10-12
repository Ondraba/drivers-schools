import { createComponent } from 'react-fela'

const Footer = createComponent(({ 
  backgroundColor = '#e5e5e5',
  color = '#333'
}) => ({
  lineHeight: 1.5,
  paddingLeft: 15,
  paddingRight: 15,
  height: 100,
  backgroundColor,
  color
}))

export default Footer
