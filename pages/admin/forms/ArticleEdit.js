import React, { Component } from 'react'
import Router from 'next/router'
import { Form, Text, Textarea } from 'react-form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import queryArticles from '../../../client/queries/fetchArticles'
import queryArticle from '../../../client/queries/fetchArticle'

class ArticleEditForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit({ id, title, perex, content }) {
    event.preventDefault()
    
    this.props.mutate({
      variables: {
        id,
        title,
        perex,
        content,
      },
    }).then(() => {
      this.props.data.refetch()
      Router.push('/admin/articles')
    })
  }

  // TODO: pekne ostylovat felou
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    const { _id, title, perex, content } = this.props.data.article
    return (
      <Form
        onSubmit={(values) => {
          this.submit(values)
        }}

        defaultValues={{
          id: _id,
          title,
          perex,
          content
        }}
  
        // Validating your form is super easy, just use the `validate` life-cycle method
        validate={values => {
          const { title, perex, content } = values
          return {
            title: !title ? 'Title is required' : undefined,
            perex: !perex ? 'Perex is required' : undefined,
            content: !content ? 'Content is required' : undefined,
          }
        }}
      >
        {({ values, submitForm, getError }) => {
          
        return (
          <form onSubmit={submitForm}>
            <input type="hidden" id="id" value={_id} />
            <Text field='title' />
            <Text field='perex' />
            <Textarea field='content' />
            <button type="submit">Submit</button>
          </form>
        )}}
      </Form>
    );
  }
}

const mutation = gql`
  mutation EditArticle($id: ID!, $title: String!, $perex: String!, $content: String!) {
    editArticle(id: $id, title: $title, perex: $perex, content: $content) {
      _id
      title
      perex
      content
      createdAt
    }
  }
`

export default graphql(mutation)(
  graphql(queryArticle, {
    options: ({ _id }) => { return { variables: { id: _id } }}
  })(ArticleEditForm)
)
