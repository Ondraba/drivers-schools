import React from "react";
import { graphql } from "react-apollo";
import Button from 'react-bootstrap/lib/Button';

export default props => {
  const { driveSchools } = props.data;
  console.log(props);

  return (
    <div>
      {driveSchools.map(driveSchool => (
        <div>
          <p key={driveSchool.id + "title"}>{driveSchool.content}</p>
          <p key={driveSchool.id + "perex"}>{driveSchool.perex}</p>
        </div>
      ))}
      <Button>Submit</Button>
    </div>
  );
};
