import gql from 'graphql-tag'

export default gql`
  {
    articles {
      _id
      title
      perex
      content
      createdAt
      likes
    }
  }
`