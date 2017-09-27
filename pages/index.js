import React from 'react'
import Link from 'next/link'
import App from '../client/components/App'
import Page from '../client/components/layout/Layout'
import Container from '../client/components/fela/Container'
import withData from '../lib/withData'
import { createComponent } from 'react-fela'

export default withData((props) => (
  <App>
    <Page title="Homepage" pathname={props.url.pathname}>
      <h1>Index Page</h1>
    </Page>
  </App>
))
