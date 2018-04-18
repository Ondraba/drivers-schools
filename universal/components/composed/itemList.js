import React from "react";
import { graphql } from "react-apollo";

import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import PageHeader from "react-bootstrap/lib/PageHeader";

import fetchDriveSchools from "../../../queries/fetchDriveSchools";
import ListItem from "./listItem";

const ItemList = props => {
  const { driveSchools } = props.data;

  return (
    <div>
      {driveSchools.map(driveSchool => (
        <ListItem key={driveSchool.id} {...driveSchool} />
      ))}
    </div>
  );
};

export default graphql(fetchDriveSchools)(ItemList);
