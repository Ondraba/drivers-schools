import React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Link from 'next/link';


export default ({ userName, content, numRating, cards}) => (
  <Col sm={3} style={styles.col}>
      <Row className="show-grid" style={styles.row}>
        <Col xs={12} md={12}>
          {userName}
        </Col>
      </Row>
      <Row className="show-grid" style={styles.row}>
        <Col xs={12} md={12}>
          {content}
        </Col>
      </Row>
      <Row className="show-grid" style={styles.row}>
        <Col xs={12} md={12}>
          {numRating}
        </Col>
      </Row>
      <Row className="show-grid" style={styles.row}>
        <Col xs={12} md={12}>
          {cards}
        </Col>
      </Row>
  </Col>
);

const styles = {
  a:{
    fontWeight: "bold",
    fontSize: "22px"
  },
  col:{
    float:"left", 
    padding: "10px",
    backgroundColor: "#f7e4d2",
    border: "10px solid white",
    marginBottom: "20px",
    height: "120px"
  },
  row: {
    marginBottom: "20px"
  }
};
