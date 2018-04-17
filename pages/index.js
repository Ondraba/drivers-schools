import React from "react";
import withData from "../lib/withData";
import ItemList from "../universal/components/composed/itemList";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";

export default withData(props => (
  <FullPageTemplate>
    <ItemList />
  </FullPageTemplate>
));
