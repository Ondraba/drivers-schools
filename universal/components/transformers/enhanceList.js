import { graphql } from "react-apollo";

export default compose(
  withSimpleState("dark"),
  withTransformProps(({ list, stateValue, stateHandler }) => {
    const otherSide = stateValue === "dark" ? "light" : "dark";
    return {
      stateHandler,
      otherSide,
      list: list.filter(char => char.side === stateValue)
    };
  })
);
