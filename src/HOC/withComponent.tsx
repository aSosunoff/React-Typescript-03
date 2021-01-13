export const withComponent = (WrapperComponent: any, wrapperProps?: any) => {
  return <T extends object>(Component: React.ComponentType<T>): React.FC<T> => {
    return (props: T) => {
      return (
        <WrapperComponent {...wrapperProps}>
          <Component {...props} />
        </WrapperComponent>
      );
    };
  };
};

/* export const withComponent = <W extends React.FC>(
  WrapperComponent: W,
  wrapperProps?: ExtractGeneric<W>
) => {
  return <T extends React.FC>(Component: T): T => {
    return (props: ExtractGeneric<T>) => {
      return (
        <WrapperComponent {...wrapperProps}>
          <Component {...props} />
        </WrapperComponent>
      );
    };
  };
}; */
