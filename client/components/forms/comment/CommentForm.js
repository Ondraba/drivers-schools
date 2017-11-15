import React, { Component } from 'react';
import { Formik } from 'formik';
import Error from '../Error';

const style = {
  color: 'red',
  fontSize: 14,
  fontWeight: 'bold'
};

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ username, content }) {
    event.preventDefault();
    const { articleId } = this.props;

    this.props.mutate({
      variables: {
        username,
        content,
        articleId
      }
    });
  }

  render () {
    return (
      <Formik
        initialValues={{
          username: '',
          content: '',
        }}
        validate={values => {
          // same as above, but feel free to move this into a class method now.
          let errors = {};

          const {
            username,
            content
          } = values;

          if (!username) {
            errors.username = 'Username is required';
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
              resolve(this.handleSubmit(values)).then(() => {
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
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {touched.username && errors.username && <Error value={errors.username} />}
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
    )
  }
}

export default CommentForm
