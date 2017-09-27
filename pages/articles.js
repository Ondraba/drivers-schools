import React from 'react'
import withData from '../lib/withData'
import Page from '../client/components/layout/Layout'
import ArticleList from '../client/components/article/ArticleList'

export default withData((props) => (
  <Page title="Articles">
    <ArticleList />
  </Page>
))
