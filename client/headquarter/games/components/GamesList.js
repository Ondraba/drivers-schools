import React from 'react'
import { graphql } from 'react-apollo';
import fetchGames from '../../../../client/queries/fetchGames';
import gql from 'graphql-tag';

const GamesList = ({games} = props.data) => {
console.log(props.data)
 return (
  <div>{games.map((game) => <p key={game._id}>{game.title}</p>)}</div>
  )
}

export default graphql(fetchGames)(GamesList)
