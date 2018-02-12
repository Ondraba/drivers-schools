import gql from 'graphql-tag'

export default gql`
  {
    games {
      _id
      title
      perex
      content
      createdAt
      sumRating
      likes
    }
  }
`
