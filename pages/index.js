import React from 'react'
import Link from 'next/link'
import App from '../client/components/App'
import Layout from '../client/components/layout/Layout'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Layout pathname={props.url.pathname}>
      <h1>Index Page</h1>
    </Layout>
  </App>
))
