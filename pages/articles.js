// @flow

import React from 'react'
import withData from '../lib/withData'
import Page from '../client/components/layout/Page'
import Layout from '../client/components/layout/Layout'
import Container from '../client/components/fela/Container'
import ArticleList from '../client/components/article/ArticleList'


export default withData((props) => (
  <Page title="Articles" pathname={props.url.pathname}>
    <Layout>
      <Container>
        <ArticleList />
        hhh
      </Container>
    </Layout>
  </Page>
))
