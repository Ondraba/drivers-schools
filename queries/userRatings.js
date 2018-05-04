import gql from "graphql-tag";

export default gql`
query UserRatings($id: ID!){
   userRatings(id: $id){
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

