import React from 'react'
import AppBar from '../fela/AppBar'
import Footer from '../fela/Footer'
import Container from '../fela/Container'

export default ({ children }) => (
  <Footer>
    <footer>
      { children }
    </footer>
  </Footer>
)
