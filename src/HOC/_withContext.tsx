import React from "react";
import { ExtractGeneric } from "../utils/UtilityTypes";

export const withContext = <
  TProvider extends React.FC<any>,
  /* TProviderProps extends extractGeneric<TProvider>, */
  TComponent extends React.FC<any>,
  TComponentProps extends Partial<ExtractGeneric<TComponent>>
>(
  Provider: TProvider,
  getProps: (props: TComponentProps) => any | undefined = () => ({}), // { [P in keyof R]: R[P] | any }
  WrapperComponent: TComponent
) => {
  const WithContext = (props: TComponentProps): JSX.Element => (
    <Provider {...getProps(props)}>
      <WrapperComponent {...(props as any)} />
    </Provider>
  );

  WithContext.displayName = `${WrapperComponent.name}.${Provider.name}.WithContext`;

  return WithContext;
};
