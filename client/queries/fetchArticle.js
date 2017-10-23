import gql from 'graphql-tag'

export default gql`
  query ArticleQuery($id: ID!) {
    article(id: $id) {
      _id
      title
      perex
      content
      createdAt
      comments {
        _id
        username
        content
        createdAt
      }
    }
  }
`