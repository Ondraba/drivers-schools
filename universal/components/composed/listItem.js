import React from "react";
import Panel from "react-bootstrap/lib/Panel";

export default ({ content, title, perex }) => (
  <Panel bsStyle="info" style={styles}>
    <Panel.Heading>
      <Panel.Title componentClass="h3">{title}</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      {content} - {perex}
    </Panel.Body>
  </Panel>
);

const styles = {
  margin: "20px",
  width: "15%",
  float: "left"
};
