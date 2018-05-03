const mongoose = require('mongoose');
const graphql = require('graphql')
const UserRatingType = require('./user_rating_type')
const DriveSchool = mongoose.model('driveSchool');
const GrapQLDateTime = require('./DateType')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} = graphql

const DriveSchoolType = new GraphQLObjectType({
  name: 'DriveSchoolType',
  fields: () => ({
    _id: { type: GraphQLID },
    nextUrl: { type: GraphQLString },
    title: { type: GraphQLString },
    perex: { type: GraphQLString },
    content: { type: GraphQLString },
    web: { type: GraphQLString },
    cars: { type: GraphQLString },
    createdAt: { type: GrapQLDateTime },
    sumRating:{ type: GraphQLInt },
    likes: { type: GraphQLInt },
    userRatings: {
      type: new GraphQLList(UserRatingType),
      resolve(parentValue) {
        return DriveSchool.findUserRatings(parentValue._id)
      }
    }
  })
})

module.exports = DriveSchoolType
