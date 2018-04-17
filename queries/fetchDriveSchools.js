import gql from 'graphql-tag'

export default gql`
  {
    driveSchools {
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
