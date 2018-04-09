const mongoose = require("mongoose");
const graphql = require("graphql");
const GrapQLDateTime = require("../types/DateType");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;
const DriveSchool = mongoose.model("driveSchool");
const DriveSchoolType = require("../types/driveSchool_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createDriveSchool: {
      type: DriveSchoolType,
      args: {
        title: { type: GraphQLString },
        perex: { type: GraphQLString },
        content: { type: GraphQLString }
      },
      resolve(parentValue, { title, perex, content }, req) {
        return DriveSchool.save({ title, perex, content });
      }
    }
  }
});

module.exports = mutation;
