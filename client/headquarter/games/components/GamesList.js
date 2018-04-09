import React from "react";
import { graphql } from "react-apollo";

export default props => {
  const { games } = props.data;
  console.log(props);

  return (
    <div>
      {games.map(game => (
        <div>
          <p key={game.id + "title"}>{game.content}</p>
          <p key={game.id + "perex"}>{game.perex}</p>
        </div>
      ))}
    </div>
  );
};
