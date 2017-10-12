import React from 'react'
import withData from '../lib/withData'
import Page from '../client/components/layout/Page'
import Layout from '../client/components/layout/Layout'
import Container from '../client/components/fela/Container'
import ArticleDetail from '../client/components/article/ArticleDetail'

export default withData(props => {
  // console.log(props)
  return (
  <Page pathname={props.url.pathname}>
    <Layout>
      <Container>
        <ArticleDetail {...props.url.query} />
      </Container>
    </Layout>
  </Page>
)})
