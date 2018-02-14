import React from 'react'
import { graphql } from 'react-apollo';

export default (props) => {
 const {games} = props.data

 return (
  <div>
      {games.map((game) =>
          <div>
              <p key={game._id+'title'}>{game.title}</p>
              <p key={game._id+'perex'}>{game.perex}</p>
          </div>
      )}
  </div>
  )
}

