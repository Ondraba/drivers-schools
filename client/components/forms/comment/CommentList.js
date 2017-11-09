import React, { Component } from 'react'
import LikeButton from '../../ui/LikeButton'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// icons
import MdThumpUp from 'react-icons/lib/md/thumb-up'

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.onLikeClick = this.onLikeClick.bind(this);
  }

  onLikeClick(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeComment: {
          _id: id,
          __typename: 'CommentType',
          likes: likes + 1
        }
      }
    })
  }

  render() {
    const { comments, onLikeClick } = this.props;
    return (
      <div>
        {comments.map(({ _id, username, content, createdAt, likes }) => (
          <div key={_id}>
            <h3>{username}</h3>
            <p style={{ marginTop: 0 }}><em>{createdAt}</em></p>
            <p style={{ marginTop: 0 }}>{content}</p>
            <LikeButton likes={likes} onClick={() => this.onLikeClick(_id, likes)} />
          </div>
        ))}
      </div>
    )
  }
}

const mutation = gql`
  mutation LikeComment($id: ID!) {
    likeComment(id: $id) {
      _id
      likes
    }
  }
`

export default graphql(mutation)(CommentList);
