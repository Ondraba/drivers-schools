import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import CommentForm from '../../components/forms/comment/CommentForm'
import gql from 'graphql-tag'
import query from '../../queries/fetchArticle'

class CommentFormContainer extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <CommentForm />
    )
  }
}

const mutation = gql`
  mutation AddCommentToArticle($username: String!, $content: String!, $articleId: ID!) {
    addCommentToArticle(username: $username, content: $content, articleId: $articleId) {
      _id
      comments {
        _id
        username
        content
        createdAt
        likes
      }
    }
  }
`

export default graphql(mutation)(CommentForm)

