const mongoose = require("mongoose");
const graphql = require("graphql");
const GrapQLDateTime = require("./DateType");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const EdeeSourceDataType = new GraphQLObjectType({
  name: "EdeeSourceDataType",
  fields: () => ({
    id: { type: GraphQLID },
    sourceId: { type: GraphQLID },
    sourceId: { type: GraphQLID },
    versionId: { type: GraphQLString },
    perex: { type: GraphQLString },
    content: { type: GraphQLString },
    date: { type: GrapQLDateTime },
    author: { type: GraphQLString },
    motiveId: { type: GraphQLInt }
  })
});

module.exports = EdeeSourceDataType;
