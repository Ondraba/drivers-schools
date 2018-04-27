import gql from "graphql-tag";

export default gql`
query DriveSchool($nextUrl: String!){
    driveSchool(nextUrl: $nextUrl){
      nextUrl
      title
      perex
      content
      web
      cars
      createdAt
      likes
    }
  }
`;

