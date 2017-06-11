const graphql = require('graphql')
const { Factory, GraphQLDate } = require('graphql-moment')
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
    createdAt: { type: Factory('D. M. YYYY H:mm') }
  }
})

module.exports = ArticleType
