import React from "react";
import withData from "../lib/withData";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";
import ItemDetail from "../universal/components/composed/itemDetail";

const Detail = props => {
  return (
    <FullPageTemplate>
      <ItemDetail {...props} />
    </FullPageTemplate>
  );
};

Detail.getInitialProps = ({ query }) => {
  return { nextUrl : query.nextUrl }
}

export default withData(Detail);