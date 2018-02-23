const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const EdeeStageSourceType = new GraphQLObjectType({
  name: "EdeeStageSourceType",
  fields: () => ({
    id: { type: GraphQLID },
    stageObjectId: { type: GraphQLID },
    sourceDataType: { type: GraphQLString },
    data: { type: GraphQLString }
  })
});

module.exports = EdeeStageSourceType;
