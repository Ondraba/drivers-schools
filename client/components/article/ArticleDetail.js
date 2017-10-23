import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import query from '../../queries/fetchArticle'
import CommentList from '../forms/comment/CommentList'
import CommentFormContainer from '../../containers/forms/CommentFormContainer'
import Story from '../forms/comment/Story'

class ArticleDetail extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    const { _id, title, perex, content, createdAt, comments } = this.props.data.article

    return (
      <div>
        <h1>{title}</h1>
        <div>{createdAt}</div>
        <p>{perex}</p>
        <div>{content}</div>
        <hr/>
        <CommentList comments={comments} />
        <hr/>
        <CommentFormContainer articleId={_id} />
      </div>
    )
  }
}

export default graphql(query, {
  options: ({ _id }) => { return { variables: { id: _id } }}
})(ArticleDetail)
