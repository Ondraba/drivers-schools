import React from "react";
import withData from "../lib/withData";
import renderList from "../universal/base/renderList";

export default withData(props => (
  <div>
    <renderList />
  </div>
));
