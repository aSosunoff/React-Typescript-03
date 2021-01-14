export const withComponentAsHOC = <TWrapper,>(
  WrapperComponent: React.FC<TWrapper>,
  wrapperProps: TWrapper
) => {
  return <TComponent,>(Component: React.FC<TComponent>) => {
    const ComponentAsHOC = (props: TComponent) => {
      return (
        <WrapperComponent {...wrapperProps}>
          <Component {...props} />
        </WrapperComponent>
      );
    };

    ComponentAsHOC.displayName = `${WrapperComponent.name}.WithComponentAsHOC`;

    return ComponentAsHOC;
  };
};
