import React from "react";
import withData from "../lib/withData";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";

export default withData(props => {
  console.log(props);
  return (
    <FullPageTemplate>
    </FullPageTemplate>
  );
});
