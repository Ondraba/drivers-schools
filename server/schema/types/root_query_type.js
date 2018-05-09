const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLList, GraphQLString } = graphql;
const DriveSchool = mongoose.model("driveSchool");
const DriveSchoolType = require("./driveSchool_type");
const UserRating = mongoose.model("userRating");
const UserRatingType = require("./user_rating_type");

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
        return DriveSchool.findOne({ nextUrl: nextUrl });
      }
    },
    driveSchoolsRatingsOnly: {
      type: DriveSchoolType,
      args: { 
        id: {
           type: new GraphQLNonNull(GraphQLID) 
       } 
    },
      resolve(parentValue, { id }) {
        return DriveSchool.findById(id);
      }
    },
    userRating: {
      type: UserRatingType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return UserRating.findById(id);
      }
    },
  })
});

module.exports = RootQueryType;
