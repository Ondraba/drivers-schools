import React, { Component } from "react";
import Router from "next/router";
import { Formik } from "formik";
import Error from "./Error";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class CreateRanking extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit({ userName, content, numRating, cards }) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
            userName, 
            content, 
            numRating,
            cards 
        },
        refetchQueries: [{ query: fetchDriveSchools }]
      })
      .then(() => {
        Router.push("/index");
      });
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

          const { userName, content, numRating, cards } = values;

          if (!userName) {
            errors.userName = "UserName is required";
          }
          if (!content) {
            errors.content = "Content is required";
          }
          if (!numRating) {
            errors.perex = "NumRating is required";
          }
          if (!cards) {
            errors.content = "Cards is required";
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
  mutation CreateDriveSchool(
    $nextUrl: String!
    $title: String!
    $perex: String!
    $content: String!
    $web: String!
    $cars: String!
  ) {
    createDriveSchool(
      nextUrl: $nextUrl
      title: $title
      perex: $perex
      content: $content
      web: $web
      cars: $cars
    ) {
      _id
      nextUrl
      title
      perex
      content
      web
      cars
      createdAt
      sumRating
      likes
    }
  }
`;

export default graphql(mutation)(CreateRanking);
