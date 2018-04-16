import React from "react";

export default ({ list, handleSetState }) => (
  <div>
    <button onClick={handleSetState}>Switch</button>
    {list.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
  </div>
);
