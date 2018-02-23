const mongoose = require("mongoose");
const graphql = require("graphql");
const GrapQLDateTime = require("../types/DateType");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;
const Game = mongoose.model("game");
const GameType = require("../types/game_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createGame: {
      type: GameType,
      args: {
        title: { type: GraphQLString },
        perex: { type: GraphQLString },
        content: { type: GraphQLString }
      },
      resolve(parentValue, { title, perex, content }, req) {
        return Game.save({ title, perex, content });
      }
    }
  }
});

module.exports = mutation;
