import React from "react";
import withData from "../lib/withData";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";
import ItemDetail from "../universal/components/detail/itemDetail";
import CreateRating from "../universal/components/detail/createRating";

import { graphql } from "react-apollo";
import { DriveSchool } from "../queries/services/fetches";

const Detail = props => {
  return (
    <FullPageTemplate>
      <ItemDetail {...props} />
      <CreateRating driveSchoolId = { props._data.driveSchool._id } />
    </FullPageTemplate>
  );
};


Detail.getInitialProps = async({ query }) => {
  const { nextUrl } = query;
  const data = await DriveSchool(nextUrl);
  return { nextUrl : query.nextUrl, _data: data }
}

export default withData(Detail);