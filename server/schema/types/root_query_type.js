const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLList } = graphql;
// const UserType = require('./user_type')
const Game = mongoose.model("game");
const GameType = require("./game_type");

const EdeeSourceData = require("../../models/edee_source_data");
const EdeeSourceDataType = require("./edee_source_data_type");

const EdeeStageModuleMap = require("../../models/edee_stage_module_map");
const EdeeStageSourceType = require("./edee_stage_source_type");
const EdeeStageObjectType = require("./edee_stage_object_type");

// const CommentService = require('../../services/comment')

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    // user: {
    //   type: UserType,
    //   resolve(parentValue, args, req) {
    //     return req.user
    //   }
    // }
    edeeStageObject: {
      type: new GraphQLList(EdeeStageObjectType),
      resolve() {
        return EdeeStageModuleMap.EdeeStageObject.findAll({});
      }
    },
    edeeStageSource: {
      type: new GraphQLList(EdeeStageSourceType),
      resolve() {
        return EdeeStageModuleMap.EdeeStageSource.findAll({});
      }
    },
    edeeSourceData: {
      type: new GraphQLList(EdeeSourceDataType),
      resolve() {
        return EdeeSourceData.findAll({});
      }
    },
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
