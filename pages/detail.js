import React from "react";
import withData from "../lib/withData";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";
import ItemDetail from "../universal/components/detail/itemDetail";
import CreateRating from "../universal/components/detail/createRating";
import RatingList from "../universal/components/detail/ratingList";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { graphql } from "react-apollo";
import { DriveSchool } from "../queries/services/fetches";

const Detail = props => {
  return (
    <FullPageTemplate>
      <Col xs={12} >
       <Row className="show-grid" >
        <Col xs={12} md={12}>
          <ItemDetail {...props} />
        </Col>
      </Row>
      <Row className="show-grid" >
        <Col xs={12} md={12}>
         <CreateRating driveSchoolId = { props._data.driveSchool._id } nextUrl = { props.nextUrl } />
        </Col>
      </Row>
      <Row className="show-grid" >
        <Col xs={12} md={12}>
         <RatingList userRatings = { props._data.driveSchool.userRatings }/>
        </Col>
      </Row>
      </Col>
    </FullPageTemplate>
  );
};



Detail.getInitialProps = async({ query }) => {
  const { nextUrl } = query;
  const data = await DriveSchool(nextUrl);
  return { nextUrl : query.nextUrl, _data: data }
}

export default withData(Detail);