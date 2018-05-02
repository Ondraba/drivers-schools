import React from "react";
import withData from "../lib/withData";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";
import ItemDetail from "../universal/components/detail/itemDetail";
import CreateRanking from "../universal/components/detail/createRanking";

import { graphql } from "react-apollo";
import DriveSchool from "../queries/driveSchool";
import { createApolloFetch } from 'apollo-fetch';
import gql from "graphql-tag";

const Detail = props => {
  return (
    <FullPageTemplate>
      <ItemDetail {...props} />
      <CreateRanking />
    </FullPageTemplate>
  );
};


Detail.getInitialProps = async({ query }) => {
  const { nextUrl } = query;
  const fetch = createApolloFetch({
    uri: 'http://localhost:5000/graphql',
  });
  const data = await fetch({
    query: DriveSchool,
    variables: { nextUrl },
  }).then(res => {
    return res.data;
  });
  return { nextUrl : query.nextUrl, _data: data }
}

export default withData(Detail);