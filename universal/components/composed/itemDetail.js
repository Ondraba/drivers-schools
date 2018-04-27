import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import DriveSchool from "../../../queries/driveSchool";

const ItemDetail = props => {
  const { driveSchool } = props.data;
  return !props.data.loading ?(
    <div>
      {driveSchool.title}
    </div>
  ) : <div>Loading... </div>
};

export default graphql(DriveSchool, {
    options: ({nextUrl}) => {
        return {
            variables: { nextUrl }
        };
    }
})(ItemDetail);

