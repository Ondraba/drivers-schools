import gql from "graphql-tag";

export default gql`
query FetchDriveSchool($nextUrl: String!){
    driveSchool(nextUrl: $nextUrl) {
      _id
      nextUrl
      title
      perex
      content
      createdAt
      sumRating
      likes
      web
      cars
    }
  }
`;

