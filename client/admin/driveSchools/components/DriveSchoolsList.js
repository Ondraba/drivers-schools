import React from "react";
import { graphql } from "react-apollo";
import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import PageHeader from 'react-bootstrap/lib/PageHeader';

export default props => {
  const { driveSchools } = props.data;

  return (
    <div>
      <PageHeader>
      DriveSchools <small>Drive schools rankings</small>
      </PageHeader>
      <ListGroup>
        {driveSchools.map(driveSchool => (
          <ListGroupItem header={driveSchool.content} key={driveSchool.id + "content"} href="#">
            {driveSchool.perex}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
