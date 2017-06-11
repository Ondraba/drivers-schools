const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString
} = graphql
const ArticleType = require('../types/article_type')
const Article = require('../../services/article')

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
      resolve(parentValue, { title, perex, conten }, req) {
        return Article.save({ title, perex, content })
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

module.exports = mutation
