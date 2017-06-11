import React from 'react'
import withData from '../lib/withData'
import Layout from '../client/components/layout/Layout'
import ArticleDetail from '../client/components/article/ArticleDetail'

export default withData(props => {
  // console.log(props)
  return (
  <Layout>    
    <ArticleDetail {...props.url.query} />
  </Layout>
)})
