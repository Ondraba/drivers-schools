import React, { Component } from "react";
import Router from "next/router";
import { Formik } from "formik";
import Error from "./Error";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import DriveSchool from "../../../queries/driveSchool";
import DriveSchools from "../../../queries/fetchDriveSchools";



import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

class CreateRating extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit({ driveSchoolId = this.props.driveSchoolId, userName, content, numRating, cards, nextUrl = this.props.nextUrl }) {
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
        update: (store, { data: { addUserRating } }) => {
          console.log(store)
          const data = store.readQuery({
            query: DriveSchool,
            variables: {
              nextUrl
            }
          })
          data.userRatings.push(addUserRating)
          store.writeQuery({
            query: DriveSchool,
            variables: {
              nextUrl
            },
            data
          })
        }
      })
    }

  render() {
    return (
      <Col xs={12}>
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
          <form onSubmit={handleSubmit}  style={styles.formik}>
          <div>
              <input
                type="content"
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
                style={styles.input.small}
              />
              {touched.userName && errors.userName && <Error value={errors.userName} />}
            </div>
            <div>
              <textarea
                type="content"
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
                style={styles.input.large}
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
                style={styles.input.small}
              />
              {touched.numRating && errors.numRating && <Error value={errors.numRating} />}
            </div>
            <div>
              <input
                type="content"
                name="cards"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cards}
                style={styles.input.small}
              />
              {touched.cards &&
              errors.cards && <Error value={errors.cards} />}
            </div>
    
            <button type="submit" disabled={isSubmitting} style={styles.button}>
              Okomentovat
            </button>
          </form>
        )}
      />
      </Col>
    );
  }
}
const styles = {
  formik : {
    marginLeft: "-5px"
  },
  input: {
    large: {
      marginTop: "10px",
      width: "70%",
      minHeight: "200px"
    },
    small: {
      marginTop: "10px",
      width: "30%"
    }
  },
  button: {
    marginTop: "20px"
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

