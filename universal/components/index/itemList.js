import React from "react";
import { graphql } from "react-apollo";

import ListItem from "./listItem";

import { branch, compose, renderComponent } from 'recompose';
import { RenderWhileLoading } from "../helpers/renderWhileLoading";
import { RenderWhileError } from "../helpers/renderWhileError";

const ItemList = props => {
  const { driveSchools } = props._data;

  return (
    <div style={styles}>
      {driveSchools.map(driveSchool => (
        <ListItem key={driveSchool.id} {...driveSchool} />
      ))}
    </div>
  );
};

const styles = {
  marginTop: "40px"
}

export default compose(
  RenderWhileLoading("_data"),
  RenderWhileError("_data")
)(ItemList);

