import React from "react";
import { graphql } from "react-apollo";

export default props => {
  const { edeeStageObject } = props.data;
  console.log(props);
  return (
    <div>
      Stage Objects:
      {edeeStageObject.map(item => (
        <div>
          <p key={item.id + "sourceStageObject"}>{item.url}</p>
        </div>
      ))}
    </div>
  );
};
