import gql from "graphql-tag";

export default gql`
  {
    edeeStageObject {
      id
      stageId
      objectId
      objectType
      name
      sourceId
      lang
      webId
      pageTreeId
      pageTreeSortOrder
      sectionSortOrder
      systemId
      dataType
      sourceType
      prototype
      objectDate
      created
      url
    }
  }
`;
