import React from "react";
import withData from "../lib/withData";
import ItemList from "../universal/components/index/itemList";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";
import { DriveSchools } from "../queries/services/fetches";

const Index = props => {
  return (
    <FullPageTemplate>
      <ItemList {...props} />
    </FullPageTemplate>
  );
};

Index.getInitialProps = async() => {
  const data = await DriveSchools();
  return { _data: data }
}

export default withData(Index);