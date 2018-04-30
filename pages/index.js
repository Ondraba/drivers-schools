import React from "react";
import withData from "../lib/withData";
import ItemList from "../universal/components/index/itemList";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";

export default withData(props => {
  console.log(props);
  return (
    <FullPageTemplate>
      <ItemList />
    </FullPageTemplate>
  );
});
