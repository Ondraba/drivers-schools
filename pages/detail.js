import React from "react";
import withData from "../lib/withData";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";
import ItemDetail from "../universal/components/detail/itemDetail";
import CreateRanking from "../universal/components/detail/createRanking";

const Detail = props => {
  return (
    <FullPageTemplate>
      <ItemDetail {...props} />
      <CreateRanking />
    </FullPageTemplate>
  );
};

Detail.getInitialProps = ({ query }) => {
  return { nextUrl : query.nextUrl }
}

export default withData(Detail);