import React from "react";
import Panel from "react-bootstrap/lib/Panel";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

export default ({ content, title, perex }) => (
  <Panel bsStyle="info" style={styles.panel}>
    <Panel.Heading>
      <Panel.Title componentClass="h3">{title}</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <Row className="show-grid" style={styles.row}>
        <Col xs={12} md={12}>
          {content} 
        </Col>
      </Row>
      <Row className="show-grid" style={styles.row}>
        <Col xs={12} md={12}>
          {perex} 
        </Col>
      </Row>
    </Panel.Body>
  </Panel>
);

const styles = {
  panel :{
    margin: "20px",
    width: "15%",
    float: "left"
  },
  row :{
    marginBottom: "20px",
  }
};
