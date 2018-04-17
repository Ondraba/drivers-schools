import React from "react";

export default ({ data }) => (
  <div>
    {data.map(item => (
      <div key={item.id}>
        <div>Title: {item.title}</div>
        <div>Perex: {item.perex}</div>
      </div>
    ))}
  </div>
);
