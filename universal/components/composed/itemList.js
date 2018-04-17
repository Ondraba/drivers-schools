import React from "react";
import { graphql } from "react-apollo";

import FullPageTemplate from "../layout/fullPageTemplate";

import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import PageHeader from "react-bootstrap/lib/PageHeader";

import fetchDriveSchools from "../../../queries/fetchDriveSchools";

const ItemList = props => {
  const { driveSchools } = props.data;

  return (
    <FullPageTemplate>
      <PageHeader>
        DriveSchools <small>Drive schools rankings</small>
      </PageHeader>
      <ListGroup>
        {driveSchools.map(driveSchool => (
          <ListGroupItem
            header={driveSchool.content}
            key={driveSchool.id + "content"}
            href="#"
          >
            {driveSchool.perex}
          </ListGroupItem>
        ))}
      </ListGroup>
    </FullPageTemplate>
  );
};

export default graphql(fetchDriveSchools)(ItemList);
