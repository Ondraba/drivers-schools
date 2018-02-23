const mongoose = require("mongoose");
const graphql = require("graphql");
const GrapQLDateTime = require("./DateType");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const EdeeStageSourceType = require("./edee_stage_source_type");

const EdeeStageObjectType = new GraphQLObjectType({
  name: "EdeeStageObjectType",
  fields: () => ({
    id: { type: GraphQLID },
    stageId: { type: GraphQLID },
    objectId: { type: GraphQLID },
    objectType: { type: GraphQLString },
    name: { type: GraphQLString },
    sourceId: { type: GraphQLID },
    lang: { type: GraphQLString },
    webId: { type: GraphQLID },
    pageTreeId: { type: GraphQLID },
    pageTreeSortOrder: { type: GraphQLID },
    sectionSortOrder: { type: GraphQLID },
    systemId: { type: GraphQLString },
    dataType: { type: GraphQLString },
    sourceType: { type: GraphQLString },
    prototype: { type: GraphQLString },
    objectDate: { type: GrapQLDateTime },
    created: { type: GrapQLDateTime },
    // changed: { type: GrapQLDateTime },
    url: { type: GraphQLString },
    edeeStageSourceData: {
      type: EdeeStageSourceType
    }
  })
});

module.exports = EdeeStageObjectType;
