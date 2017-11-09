import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import query from '../../queries/fetchArticle'
import CommentList from '../forms/comment/CommentList'
import CommentFormContainer from '../../containers/forms/CommentFormContainer'
import LikeButton from '../ui/LikeButton'

class ArticleDetail extends Component {

  onLikeClick(id, likes) {
    this.props.likeArticle({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeArticle: {
          _id: id,
          __typename: 'ArticleType',
          likes: likes + 1
        }
      }
    })
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    const {
      _id,
      title,
      perex,
      content,
      createdAt,
      likes,
      comments
    } = this.props.data.article

    return (
      <div>
        <h1>{title}</h1>
        <div>{createdAt}</div>
        <p>{perex}</p>
        <div>{content}</div>
        <LikeButton likes={likes} onClick={() => this.onLikeClick(_id, likes)}/>
        <hr/>
        <CommentList comments={comments} />
        <hr/>
        <CommentFormContainer articleId={_id} />
      </div>
    )
  }
}

const mutationLikeArticle = gql`
  mutation LikeArticle($id: ID!) {
    likeArticle(id: $id) {
      _id
      likes
    }
  }
`

export default compose(
  graphql(mutationLikeArticle, { name: 'likeArticle' }),
  graphql(
    query, {
    options: ({ _id }) => {
      return {
        variables: {
          id: _id
        }
      }
    }
  })
)(ArticleDetail)
