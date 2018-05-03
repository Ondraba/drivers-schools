import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Link from 'next/link';

import { compose } from 'recompose';
import { RenderWhileLoading } from "../helpers/renderWhileLoading";
import { RenderWhileError } from "../helpers/renderWhileError";

const ItemDetail = props => {
  const { driveSchool : { nextUrl, title, content, perex, web, cars }} = props._data;
  return (
    <Col sm={3} style={styles.col}>
      <Row className="show-grid" style={styles.row}>
        <Col xs={12} md={12}>
          <Link href={`detail?nextUrl=${nextUrl}`}>
            <a style={styles.a}>{title}</a>
          </Link>
        </Col>
      </Row>
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
    </Col>
  ) 
};

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
    height: "340px"
  },
  row: {
    marginBottom: "20px"
  }
};


export default compose(
  RenderWhileLoading("_data"),
  RenderWhileError("_data")
)(ItemDetail);


