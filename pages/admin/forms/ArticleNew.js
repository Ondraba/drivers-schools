import React, { Component } from 'react';
import Router from 'next/router';
import { Formik } from 'formik';
import Error from '../../../client/components/forms/Error';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import query from '../../../client/queries/fetchArticles';

class ArticleNewForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit({ title, perex, content }) {
    event.preventDefault()

    this.props.mutate({
      variables: {
        title,
        perex,
        content
      },
      refetchQueries: [{ query }]
    }).then(() => {
      Router.prefetch('/articles');
    }).then(() => {
      Router.push('/articles');
    })
  }

  // TODO: pekne ostylovat felou
  render() {
    return (
      <Formik
        initialValues={{
          title: '',
          perex: '',
          content: '',
        }}
        validate={values => {
          // same as above, but feel free to move this into a class method now.
          let errors = {};

          const {
            title,
            perex,
            content
          } = values;

          if (!title) {
            errors.title = 'Title is required';
          }
          if (!perex) {
            errors.perex = 'Perex is required';
          }
          if (!content) {
            errors.content = 'Content is required';
          }

          return errors;
        }}
        onSubmit={(
          values,
          { setSubmitting, setErrors, resetForm }
        ) => {
          return new Promise((resolve, reject) => {
            try {
              resolve(this.submit(values)).then(() => {
                resetForm();
              })
            } catch(err) {
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
          handleReset,
        }) => (
          <form onSubmit={handleSubmit}>
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
              {touched.content && errors.content && <Error value={errors.content} />}
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
  mutation AddArticle($title: String!, $perex: String!, $content: String!) {
    addArticle(title: $title, perex: $perex, content: $content) {
      _id
      title
      perex
      content
      createdAt
    }
  }
`

export default graphql(mutation)(ArticleNewForm)
