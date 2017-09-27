import React from 'react'
import withData from '../lib/withData'
import Page from '../client/components/layout/Layout'
import ArticleDetail from '../client/components/article/ArticleDetail'

export default withData(props => {
  // console.log(props)
  return (
  <Page>    
    <ArticleDetail {...props.url.query} />
  </Page>
)})
