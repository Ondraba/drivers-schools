import React from 'react'
import AppBar from '../fela/AppBar'
import Container from '../fela/Container'

export default ({ children }) => (
  <header>
    <AppBar backgroundColor="turquoise" color="#fff">
      <Container>
        <nav style={{height: '100%', lineHeight: 4.5 }}>
          { children }
        </nav>
      </Container>
    </AppBar>
  </header>
)
