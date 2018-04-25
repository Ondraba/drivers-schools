import React from "react";
import Panel from "react-bootstrap/lib/Panel";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Link from 'next/link'

export default ({ nextUrl, content, title, perex, web, cars }) => (
  <Panel bsStyle="info" style={styles.panel}>
    <Panel.Heading>
      <Panel.Title componentClass="h3">
      <Link href={`detail?nextUrl=${nextUrl}`}>
         <a>{title}</a>
        </Link>
      </Panel.Title>
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
      <Row className="show-grid" style={styles.row}>
        <Col xs={12} md={12}>
          <a href={web}>{web}</a>
        </Col>
      </Row>
      <Row className="show-grid" style={styles.row}>
        <Col xs={12} md={12}>
          {cars}
        </Col>
      </Row>
    </Panel.Body>
  </Panel>
);

const styles = {
  panel: {
    margin: "20px",
    width: "15%",
    float: "left"
  },
  row: {
    marginBottom: "20px"
  }
};
