import { ExtractGeneric } from "../utils/UtilityTypes";

export const withContext = <
  TProvider extends React.FC<any>,
  TComponent extends React.FC<any>,
  TComponentProps extends Partial<ExtractGeneric<TComponent>>
>(
  Provider: TProvider,
  getProps: (props: TComponentProps) => any | undefined = () => ({}),
  WrapperComponent: TComponent
) => any;
