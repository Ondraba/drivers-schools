const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLList } = graphql;
// const UserType = require('./user_type')
const ArticleType = require('./article_type')
const Article = mongoose.model('article');
const ArticleService = require('../../services/article')
const CommentType = require('./comment_type')
const Comment = mongoose.model('comment');
// const CommentService = require('../../services/comment')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    // user: {
    //   type: UserType,
    //   resolve(parentValue, args, req) {
    //     return req.user
    //   }
    // }
    articles: {
      type: new GraphQLList(ArticleType),
      resolve() {
        return Article.find({}).sort({ createdAt: -1 })
      }
    },
    article: {
      type: ArticleType,
      args: {
        id: {
          name: '_id',
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parentValue, { id }) {
        return Article.findById(id);
      }
    },
    comment: {
      type: CommentType,
      args: {
        id: {
          name: '_id',
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parentValue, { id }) {
        return Comment.findById(id)
      }
    }
  })
});

module.exports = RootQueryType;
