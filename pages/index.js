import React from "react";
import Link from "next/link";
import Page from "../client/components/layout/Page";
import Layout from "../client/components/layout/Layout";
import Container from "../client/components/fela/Container";
import withData from "../lib/withData";

export default withData(props => (
  <Page title="Homepage" pathname={props.url.pathname}>
    <Layout>
      <Container>
        <h1>Index Page</h1>
      </Container>
    </Layout>
  </Page>
));
