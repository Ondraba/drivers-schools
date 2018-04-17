import React from "react";
import withData from "../lib/withData";
import ItemList from "../universal/components/composed/itemList";

export default withData(props => (
  <div>
    <ItemList />
  </div>
));
