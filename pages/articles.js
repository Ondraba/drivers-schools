// @flow

import React from 'react'
import withData from '../lib/withData'
import Page from '../client/components/layout/Page'
import Layout from '../client/components/layout/Layout'
import Container from '../client/components/fela/Container'
import ArticleList from '../client/components/article/ArticleList'
import { Button } from 'reactstrap';

type Props = {
    url: string,
    pathname: string
}

export default withData(({url} : Props) => (
  <Page title="Articles" pathname={url.pathname}>
    <Layout>
      <Container>
        <ArticleList />
        hhh
        <Button color="danger">Danger!</Button>
      </Container>
    </Layout>
  </Page>
))
