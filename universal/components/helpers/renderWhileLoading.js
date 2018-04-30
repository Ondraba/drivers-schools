import  { branch, renderComponent } from 'recompose'

const Loading = () => (
  <div>Loading..</div>
);

export const RenderWhileLoading = (nestedProps = "data") => branch(
    props => props[nestedProps] && props[nestedProps].loading,
    renderComponent(Loading)
);
