import gql from "graphql-tag";

export default gql`
  {
    edeeStageSource {
      id
      stageObjectId
      sourceDataType
      data
    }
  }
`;
