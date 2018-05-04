import { createApolloFetch } from 'apollo-fetch';
import gql from "graphql-tag";

const fetch = createApolloFetch({
    uri: 'http://localhost:5000/graphql',
  });

export const DriveSchool = (nextUrl) => fetch({
    query: `query DriveSchool($nextUrl: String!){
        driveSchool(nextUrl: $nextUrl){
          _id
          nextUrl
          title
          perex
          content
          web
          cars
          createdAt
          likes
          userRatings{
            _id
            userName
            content
            numRating
            cards
          }
        }
      }`,
    variables: { nextUrl },
  }).then(res => {
    return res.data;
});

export const DriveSchools = () => fetch({
  query: `{
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
  }`
}).then(res => {
  return res.data;
});