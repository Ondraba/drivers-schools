import React from "react";
import { graphql } from "react-apollo";

import RatingItem from "./ratingItem";

import { branch, compose, renderComponent } from 'recompose';
import { RenderWhileLoading } from "../helpers/renderWhileLoading";
import { RenderWhileError } from "../helpers/renderWhileError";

const RatingList = ({userRatings}) => {
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

export default compose(
  RenderWhileLoading("_data"),
  RenderWhileError("_data")
)(RatingList);

