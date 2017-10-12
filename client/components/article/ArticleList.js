import React, { Component } from 'react'
import Link from 'next/link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import query from '../../queries/fetchArticles'

// icons
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline'
import MdEdit from 'react-icons/lib/md/edit'
import MdDelete from 'react-icons/lib/md/delete'

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

    return articles.map(({ _id, title, perex, content, createdAt }) => {
      return (
        <div key={_id} style={style}>
          <Link prefetch as={`/articles/${_id}`} href={`/article?_id=${_id}`}>
            <a><h2>{title}</h2></a>
          </Link>
          <p>{createdAt}</p>
          <p>{perex}</p>
          <Link prefetch as={`/admin/articles/edit/${_id}`} href={`/admin/articles/edit?_id=${_id}`}>
            <a title="Edit" style={{ fontSize: 24 }}><MdEdit/></a>
          </Link>
          <a href="#" title="Delete" onClick={() => this.onDeleteClick(_id)} style={{ fontSize: 24, marginLeft: 5 }}><MdDelete/></a>
        </div>
      )
    })
  }

  onDeleteClick(id) {
    this.props.mutate({
      variables: {
        id
      },
      refetchQueries: [{ query }]
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

const mutation = gql`
  mutation RemoveArticle($id: ID!) {
    removeArticle(id: $id) {
      _id
    }
  }
`

export default graphql(mutation)(
  graphql(query)(ArticleList)
)
