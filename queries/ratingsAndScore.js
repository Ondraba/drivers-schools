import gql from "graphql-tag";

export default gql`
query RatingAndScore($nextUrl: String!){
  ratingsAndScore(nextUrl: $nextUrl){
     _id
    userRatings{
        _id
        userName
        content
        numRating
        cards
        }
     }
  }
`;

