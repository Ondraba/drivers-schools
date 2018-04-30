
import  { branch, renderComponent } from 'recompose'

const Error = () => (
  <div>Ups, there is some error in component..</div>
);

export const RenderWhileError = (nestedProps = "data") => branch(
    props => props[nestedProps] && props[nestedProps].error,
    renderComponent(Error)
);

