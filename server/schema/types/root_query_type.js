const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLList } = graphql;
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
        id: {
          name: "_id",
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parentValue, { id }) {
        return DriveSchool.findById(id);
      }
    }
  })
});

module.exports = RootQueryType;
