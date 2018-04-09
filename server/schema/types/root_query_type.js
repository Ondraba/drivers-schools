const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLList } = graphql;
// const UserType = require('./user_type')
const Game = mongoose.model("game");
const GameType = require("./game_type");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    games: {
      type: new GraphQLList(GameType),
      resolve() {
        return Game.find({}).sort({ createdAt: -1 });
      }
    },
    game: {
      type: GameType,
      args: {
        id: {
          name: "_id",
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parentValue, { id }) {
        return Game.findById(id);
      }
    }
  })
});

module.exports = RootQueryType;
