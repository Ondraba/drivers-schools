import React, { Component } from 'react'
import Router from 'next/router'
import { Form, Text, Textarea } from 'react-form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import query from '../../../client/queries/fetchArticles'

// const ArticleNewForm = React.createClass({
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
      Router.prefetch('/articles')
      Router.push('/articles')
    })
  }

  // TODO: pekne ostylovat felou
  render() {
    return (
      <Form
        onSubmit={(values) => {
          console.log('Success!', values)
          this.submit(values)
        }}

        validate={values => {
          const { title, perex, content } = values
          return {
            title: !title ? 'Title is required' : undefined,
            perex: !perex ? 'Perex is required' : undefined,
            content: !content ? 'Content is required' : undefined,
          }
        }}
      >
        {({ values, submitForm, addValue, removeValue, getError }) => {

        return (
          // When the form is submitted, call the `submitForm` callback prop
          <form onSubmit={submitForm}>
            <Text field='title' placeholder='Title' />
            <Text field='perex' placeholder='Perex' />
            <Textarea field='content' placeholder='Content...' />
            <button type="submit">Submit</button>
          </form>
        )}}
      </Form>
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
