import React from "react";
import { branch, renderComponent } from "recompose";

const renderForError = (component, propName = "data") =>
  branch(
    props => props[propName] && props[propName].error,
    renderComponent(component)
  );
