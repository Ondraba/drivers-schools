const graphql = require('graphql')
const GrapQLDateTime = require('./DateType')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql

const ArticleType = new GraphQLObjectType({
  name: 'ArticleType',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    perex: { type: GraphQLString },
    content: { type: GraphQLString },
    createdAt: { type: GrapQLDateTime }
  }
})

module.exports = ArticleType
