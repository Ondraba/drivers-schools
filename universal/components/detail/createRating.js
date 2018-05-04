import React, { Component } from "react";
import Router from "next/router";
import { Formik } from "formik";
import Error from "./Error";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import UserRatings from "../../../queries/userRatings";

class CreateRating extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit({ driveSchoolId = this.props.driveSchoolId, userName, content, numRating, cards }) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
            driveSchoolId,
            userName, 
            content, 
            numRating,
            cards
        },
         query: UserRatings, options: (props) => {
          return {
              variables: { id: driveSchoolId }
          }
        } 
      })
  }

  render() {
    return (
      <Formik
        initialValues={{
          userName: "",
          content: "",
          numRating: "",
          cards: ""
        }}
        validate={values => {
          // same as above, but feel free to move this into a class method now.
          let errors = {};

          const { driveSchoolId, userName, content, numRating, cards } = values;

          if (!userName) {
            errors.userName = "UserName is required";
          }
          if (!content) {
            errors.content = "Content is required";
          }
          if (!numRating) {
            errors.numRating = "NumRating is required";
          }
          if (!cards) {
            errors.cards = "Cards is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
          return new Promise((resolve, reject) => {
            try {
              resolve(this.submit(values)).then(() => {
                resetForm();
              });
            } catch (err) {
              reject(err);
            }
          });
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          handleReset
        }) => (
          <form onSubmit={handleSubmit}>\
          <div>
              <input
                type="content"
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
              />
              {touched.userName && errors.userName && <Error value={errors.userName} />}
            </div>
            <div>
              <input
                type="content"
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              {touched.content && errors.content && <Error value={errors.content} />}
            </div>
            <div>
              <input
                type="content"
                name="numRating"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.numRating}
              />
              {touched.numRating && errors.numRating && <Error value={errors.numRating} />}
            </div>
            <div>
              <textarea
                type="content"
                name="cards"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cards}
              />
              {touched.cards &&
              errors.cards && <Error value={errors.cards} />}
            </div>
    
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      />
    );
  }
}

const mutation = gql`
    mutation AddUserRating($driveSchoolId: ID, $userName: String, $content: String, $numRating: Int, $cards: String){
      addUserRating(driveSchoolId: $driveSchoolId, userName: $userName,content: $content, numRating: $numRating, cards: $cards){
            _id
            userRatings{
                _id
                userName
                content
                numRating
                cards
            }
        }
    }
`;

export default graphql(mutation)(CreateRating);

