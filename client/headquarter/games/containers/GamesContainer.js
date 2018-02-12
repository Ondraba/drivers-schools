import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import GamesList from '../components/GamesList'
//import gql from 'graphql-tag'
//import query from '../../queries/fetchArticle'

class GamesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { games: ['FIFA18', 'TES6', 'Kingdom Come']}
  }

  render () {
    return (
      <GamesList />
    )
  }
}
export default GamesContainer
