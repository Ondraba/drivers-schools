import gql from "graphql-tag";

export default gql`
  {
    driveSchools {
      _id
      nextUrl
      title
      perex
      content
      createdAt
      likes
      web
      cars
    }
  }
`;
