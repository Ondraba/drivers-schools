import React, { Component } from 'react'
import Link from 'next/link'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import query from '../../queries/fetchArticles'
import LikeButton from '../ui/LikeButton'

// icons
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline'
import MdEdit from 'react-icons/lib/md/edit'
import MdDelete from 'react-icons/lib/md/delete'
import MdThumpUp from 'react-icons/lib/md/thumb-up'

class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  renderArticles() {
    const { articles } = this.props.data

    if (!articles) {
      return <div>Loading...</div>
    }

    const style = {
      padding: '20px',
      borderWidth: 1,
      borderColor: '#e1e1e1',
      borderStyle: 'solid'
    }

    return articles.map(({ _id, title, perex, content, createdAt, likes }) => {
      return (
        <div key={_id} style={style}>
          <Link prefetch as={`/articles/${_id}`} href={`/article?_id=${_id}`}>
            <a><h2>{title}</h2></a>
          </Link>
          <p>{createdAt}</p>
          <p>{perex}</p>
          <LikeButton likes={likes} onClick={() => this.onLikeClick(_id, likes)}/>
          <Link prefetch as={`/admin/articles/edit/${_id}`} href={`/admin/articles/edit?_id=${_id}`}>
            <a title="Edit" style={{ fontSize: 24 }}><MdEdit/></a>
          </Link>
          <a href="#" title="Delete" onClick={() => this.onDeleteClick(_id)} style={{ fontSize: 24, marginLeft: 5 }}><MdDelete/></a>
        </div>
      )
    })
  }

  onDeleteClick(id) {
    this.props.removeArticle({
      variables: {
        id
      },
      refetchQueries: [{ query }]
    })
  }

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
    return (
      <div>
        <div style={{ margin: '15px 0px', textAlign: 'right' }}>
          <Link prefetch as="/admin/articles/new" href="/admin/articles/create">
            <a style={{ textDecoration: 'none' }}>Add Article <MdAddCircleOutline style={{ fontSize: 30 }}/></a>
          </Link>
        </div>
        {this.renderArticles()}
      </div>
    )
  }
}

const mutationRemoveArticle = gql`
  mutation RemoveArticle($id: ID!) {
    removeArticle(id: $id) {
      _id
    }
  }
`

const mutationLikeArticle = gql`
  mutation LikeArticle($id: ID!) {
    likeArticle(id: $id) {
      _id
      likes
    }
  }
`

export default compose(
  graphql(mutationRemoveArticle, { name: 'removeArticle' }),
  graphql(mutationLikeArticle, { name: 'likeArticle' }),
  graphql(query, {
    options: { pollInterval: 2000 }
  })
)(ArticleList)
