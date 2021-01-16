export function withComponentAsHOC<TWrapperProps, TComponentProps>(
  WrapperComponent: React.ComponentType<TWrapperProps>,
  mapProps: (wrapperProps: TComponentProps) => TWrapperProps
) {
  return function StartComponent(
    Component: React.ComponentType<TComponentProps>
  ) {
    function ComponentAsHOC(componentProps: TComponentProps) {
      const props = mapProps
        ? mapProps({ ...componentProps })
        : ({} as TWrapperProps);

      return (
        <WrapperComponent {...props}>
          <Component {...componentProps} />
        </WrapperComponent>
      );
    }

    ComponentAsHOC.displayName = `${WrapperComponent.name}.WithComponentAsHOC`;

    return ComponentAsHOC;
  };
}
