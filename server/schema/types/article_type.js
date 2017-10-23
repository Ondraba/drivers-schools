const mongoose = require('mongoose');
const graphql = require('graphql')
const CommentType = require('./comment_type')
const Article = mongoose.model('article');
const GrapQLDateTime = require('./DateType')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql

const ArticleType = new GraphQLObjectType({
  name: 'ArticleType',
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    perex: { type: GraphQLString },
    content: { type: GraphQLString },
    createdAt: { type: GrapQLDateTime },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parentValue) {
        return Article.findComments(parentValue._id)
      }
    }
  })
})

module.exports = ArticleType
