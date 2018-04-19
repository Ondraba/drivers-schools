import gql from 'graphql-tag'

export default gql`
  {
    driveSchools {
      _id
      title
      perex
      content
      web
      cars
      createdAt
      sumRating
      likes
    }
  }
`
