import React from "react";
import { graphql } from "react-apollo";

export default props => {
  const { edeeStageSource } = props.data;
  console.log(props);
  return (
    <div>
      Stages:
      {edeeStageSource.map(item => (
        <div id={item.id + "div"}>
          <p key={item.id + "url"}>{JSON.parse(item.data).url}</p>
          <p key={item.id + "sourceDataType"}>{item.sourceDataType}</p>
          <p key={item.id + "data "}>{JSON.parse(item.data).sourceData.name}</p>
        </div>
      ))}
    </div>
  );
};
