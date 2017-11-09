const mongoose = require('mongoose');
const graphql = require('graphql')
const Comment = mongoose.model('comment');
const GrapQLDateTime = require('./DateType')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = graphql

const CommentType = new GraphQLObjectType({
  name: 'CommentType',
  fields: () => ({
    _id: { type: GraphQLID },
    username: { type: GraphQLString },
    content: { type: GraphQLString },
    createdAt: { type: GrapQLDateTime },
    likes: { type: GraphQLInt },
    article: {
      type: require('./article_type'),
      resolve(parentValue) {
        return Comment.findById(parentValue).populate('article')
          .then(comment => {
            console.log(comment)
            return comment.article
          });
      }
    }
  })
})

module.exports = CommentType