const mongoose = require('mongoose');
const graphql = require('graphql')
const GrapQLDateTime = require('../types/DateType')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} = graphql
const ArticleType = require('../types/article_type')
const Article = require('../../services/article')
const ArticleModel = mongoose.model('article');``
const CommentType = require('../types/comment_type');
const CommentModel = mongoose.model('comment');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addArticle: {
      type: ArticleType,
      args: {
        title: { type: GraphQLString },
        perex: { type: GraphQLString },
        content: { type: GraphQLString }
      },
      resolve(parentValue, { title, perex, content }, req) {
        return Article.save({ title, perex, content })
      },
    },
    editArticle: {
      type: ArticleType,
      args: {
        id: {
          name: '_id',
          type: new GraphQLNonNull(GraphQLID)
        },
        title: { type: new GraphQLNonNull(GraphQLString) },
        perex: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        createdAt: { type: GrapQLDateTime },
      },
      resolve(parentValue, { id, title, perex, content }, req) {
        if (!perex) {
          perex = ''
        }

        return Article.update(id, { title, perex, content }, () => {})
      },
    },
    removeArticle: {
      type: ArticleType,
      args: {
        id: {
          name: '_id',
          type: new GraphQLNonNull(GraphQLID)
        },
      },
      resolve(parentValue, { id }, req) {
        return Article.remove(id)
      },
    },
    addCommentToArticle: {
      type: ArticleType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        articleId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { username, content, articleId }) {
        return ArticleModel.addComment(articleId, username, content);
      }
    },
    likeArticle: {
      type: ArticleType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }, req) {
        return ArticleModel.likeArticle(id);
      }
    },
    likeComment: {
      type: CommentType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }, req) {
        return CommentModel.likeComment(id);
      }
    }
  }
})

// mutation AddArticle($title: String!, $perex: String, $content: String!) {
//   addArticle(title: $title, perex: $perex, content: $contentt) {
//     title
//     perex
//     content
//   }
// }

// mutation EditArticle($id: ID!, $title: String!, $perex: String, $content: String!, $createdAt: DateTime!) {
//   editArticle(id: $id, title: $title, perex: $perex, content: $content, createdAt: $createdAt) {
//     _id
//     title
//     perex
//     content
//     createdAt
//   }
// }

// mutation RemoveArticle($id: ID!) {
//   removeArticle(id: $id) {
//     _id
//     title
//     perex
//     content
//     createdAt
//   }
// }

module.exports = mutation
