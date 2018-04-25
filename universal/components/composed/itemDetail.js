import React from "react";
import { graphql } from "react-apollo";

import fetchDriveSchool from "../../../queries/fetchDriveSchool";

const ItemDetail = (props) => {
  const { driveSchool } = props.data;
console.log(props)
  return (
    <div>
      {/* {driveSchool.title} */}
    </div>
  );
};

export default graphql(fetchDriveSchool,{
    options: (props) => {
        return {
            variables: { nextUrl: props.nextUrl}
        }
    }
})(ItemDetail);



