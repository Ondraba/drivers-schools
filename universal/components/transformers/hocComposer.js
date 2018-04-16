import React from "react";

export default (...hocs) => BaseComponent =>
  hocs.reduceRight((acc, hoc) => hoc(acc), BaseComponent);
