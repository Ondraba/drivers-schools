import gql from "graphql-tag";

export default gql`
query DriveSchoolsRatingsOnly($id: ID!){
  driveSchoolsRatingsOnly(id: $id){
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

