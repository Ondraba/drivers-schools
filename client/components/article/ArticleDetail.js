import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ArticleDetail extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    const { title, perex, content, createdAt } = this.props.data.article
    return (
      <div>
        <h1>{title}</h1>
        <div>{createdAt}</div>
        <p>{perex}</p>
        <div>{content}</div>
      </div>
    )
  }
}

const query = gql`
  query ArticleQuery($id: ID!) {
    article(id: $id) {
      _id
      title
      perex
      content
      createdAt
    }
  }
`

export default graphql(query, {
  options: ({ _id }) => { return { variables: { id: _id } }}
})(ArticleDetail)
// export default ArticleDetail
