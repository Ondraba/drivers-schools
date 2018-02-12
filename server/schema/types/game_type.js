const mongoose = require('mongoose');
const graphql = require('graphql')
const UserRatingType = require('./user_rating_type')
const Game = mongoose.model('game');
const GrapQLDateTime = require('./DateType')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} = graphql

const GameType = new GraphQLObjectType({
  name: 'GameType',
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    perex: { type: GraphQLString },
    content: { type: GraphQLString },
    createdAt: { type: GrapQLDateTime },
    sumRating:{ type: GraphQLInt },
    likes: { type: GraphQLInt },
    userRatings: {
      type: new GraphQLList(UserRatingType),
      resolve(parentValue) {
        return Game.findUserRatings(parentValue._id)
      }
    }
  })
})

module.exports = GameType
