import React from "react";
import { graphql } from "react-apollo";

import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import PageHeader from "react-bootstrap/lib/PageHeader";

import fetchDriveSchools from "../../../queries/fetchDriveSchools";
import ListItem from "./listItem";

import { branch, compose, pure, renderComponent } from 'recompose';
import { RenderWhileLoading } from "../helpers/renderWhileLoading";
import { RenderWhileError } from "../helpers/renderWhileError";

const ItemList = props => {
  const { driveSchools } = props.data;

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
  graphql(fetchDriveSchools),
  RenderWhileLoading("data"),
  RenderWhileError("data")
)(ItemList);

