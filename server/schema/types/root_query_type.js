const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLList, GraphQLString } = graphql;
const DriveSchool = mongoose.model("driveSchool");
const DriveSchoolType = require("./driveSchool_type");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    driveSchools: {
      type: new GraphQLList(DriveSchoolType),
      resolve() {
        return DriveSchool.find({}).sort({ createdAt: -1 });
      }
    },
    driveSchool: {
      type: DriveSchoolType,
      args: {
        nextUrl: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parentValue, { nextUrl }) {
        return DriveSchool.findOne({
          where: { nextUrl: nextUrl }
        });
      }
    }
  })
});

module.exports = RootQueryType;
