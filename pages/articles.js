import React from 'react'
import withData from '../lib/withData'
import Layout from '../client/components/layout/Layout'
import ArticleList from '../client/components/article/ArticleList'

export default withData((props) => (
  <Layout>
    <ArticleList />
  </Layout>
))
