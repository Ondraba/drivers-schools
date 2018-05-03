const mongoose = require("mongoose");
const graphql = require("graphql");
const GrapQLDateTime = require("../types/DateType");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID , GraphQLInt } = graphql;
const DriveSchool = mongoose.model("driveSchool");
const DriveSchoolType = require("../types/driveSchool_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createDriveSchool: {
      type: DriveSchoolType,
      args: {
        nextUrl: { type: GraphQLString },
        title: { type: GraphQLString },
        perex: { type: GraphQLString },
        content: { type: GraphQLString },
        web: { type: GraphQLString },
        cars: { type: GraphQLString }
      },
      resolve(parentValue, { nextUrl, title, perex, content, web, cars }, req) {
        return DriveSchool.save({ nextUrl, title, perex, content, web, cars });
      }
    }
  },
  addUserRating: {
    type: DriveSchoolType,
    args: {
      driveSchoolId: { type: GraphQLID },
      userName: { type: GraphQLString },
      content: { type: GraphQLString },
      numRating: { type: GraphQLInt },
      cards: { type: GraphQLString },
    },
    resolve(parentValue, { driveSchoolId, userName, content, numRating, cards }) {
      return DriveSchool.addUserRating(driveSchoolId, userName, content, numRating, cards);
    }
  }
});

module.exports = mutation;

