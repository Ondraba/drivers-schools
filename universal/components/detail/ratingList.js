import React from "react";
import { graphql } from "react-apollo";

import RatingItem from "./ratingItem";

import { branch, compose, renderComponent } from 'recompose';
import { RenderWhileLoading } from "../helpers/renderWhileLoading";
import { RenderWhileError } from "../helpers/renderWhileError";

import RatingsAndScore from "../../../queries/ratingsAndScore";

const RatingList = props => {
  const { ratingsAndScore : { userRatings }} = props.data;
  return (
    <div style={styles}>
      {userRatings.map(userRating => (
        <RatingItem key={userRating.id} {...userRating} />
      ))}
    </div>
  );
};

const styles = {
  marginTop: "40px"
}

const data = graphql(RatingsAndScore,{
  options: (props) => {
      return {
          variables: {nextUrl: props.nextUrl}
      }
  }
})

export default compose(
  data,
  RenderWhileLoading("data"),
  RenderWhileError("data")
)(RatingList);


