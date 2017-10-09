import React from 'react'
import AppBar from '../fela/AppBar'

export default ({ children }) => (
  <header>
    <AppBar backgroundColor="turquoise" color="#fff">      
      <nav style={{height: '100%', lineHeight: 4.5 }}>
        { children }
      </nav>      
    </AppBar>
  </header>
)
