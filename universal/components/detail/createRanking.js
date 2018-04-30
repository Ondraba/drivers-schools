import React, { Component } from "react";
import Router from "next/router";
import { Formik } from "formik";
import Error from "./Error";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import fetchDriveSchools from "../../../queries/fetchDriveSchools";

class CreateRanking extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit({ nextUrl, title, perex, content, web, cars }) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          nextUrl,
          title,
          perex,
          content,
          web,
          cars
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
          nextUrl: "",
          title: "",
          perex: "",
          content: "",
          web: "",
          cars: ""
        }}
        validate={values => {
          // same as above, but feel free to move this into a class method now.
          let errors = {};

          const { nextUrl, title, perex, content, web, cars } = values;

          if (!nextUrl) {
            errors.nextUrl = "NextUrl is required";
          }
          if (!title) {
            errors.title = "Title is required";
          }
          if (!perex) {
            errors.perex = "Perex is required";
          }
          if (!content) {
            errors.content = "Content is required";
          }
          if (!web) {
            errors.web = "Web is required";
          }
          if (!cars) {
            errors.cars = "Cars is required";
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
                name="nextUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nextUrl}
              />
              {touched.nextUrl && errors.nextUrl && <Error value={errors.nextUrl} />}
            </div>
            <div>
              <input
                type="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {touched.title && errors.title && <Error value={errors.title} />}
            </div>
            <div>
              <input
                type="perex"
                name="perex"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.perex}
              />
              {touched.perex && errors.perex && <Error value={errors.perex} />}
            </div>
            <div>
              <textarea
                type="content"
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              {touched.content &&
              errors.content && <Error value={errors.content} />}
            </div>
            <div>
              <textarea
                type="content"
                name="web"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.web}
              />
              {touched.web && errors.web && <Error value={errors.web} />}
            </div>
            <div>
              <textarea
                type="content"
                name="cars"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cars}
              />
              {touched.cars && errors.cars && <Error value={errors.cars} />}
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
