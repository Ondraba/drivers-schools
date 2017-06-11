import React, { Component } from 'react'
import Link from 'next/link'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class ArticleList extends Component {
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
          <Link as={`/articles/${_id}`} href={`/article?_id=${_id}`}>
            <a><h2>{title}</h2></a>
          </Link>
          <p>{createdAt}</p>
          <p>{perex}</p>
        </div>
      )
    })
  }

  render() {    
    return (
      <div>
        {this.renderArticles()}
      </div>
    )
  }
}

const query = gql`
  {
    articles {
      _id
      title
      perex
      content
      createdAt
    }
  }
`

export default graphql(query)(ArticleList)
