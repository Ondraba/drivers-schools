import React from "react";

export default (withFilterProps = BaseComponent => ({ list, side }) => {
  const transformedProps = list.filter(char => char.side === side);
  return <BaseComponent list={transformedProps} />;
});
