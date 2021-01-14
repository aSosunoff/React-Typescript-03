import React, { useState } from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponentAsHOC } from "../../../HOC/withComponentAsHOC";
import Row from "../../Row";
import { BasePageType } from "../../../types/BasePageType";
import { PeopleDetails, PeopleList } from "../../StarComponents/StarComponents";

/* const compose = (...fn: any[]) => <T,>(x: React.FC<T>): React.FC<T> =>
  fn.reduceRight((res, f) => f(res), x);

const TEST: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const TEST2: React.FC = ({ children }) => {
  return <div>{children}</div>;
}; */

const PeoplePage: React.FC<BasePageType> = ({ className, style }) => {
  const [id, setId] = useState("0");

  return (
    <Row
      className={className}
      style={style}
      renderLeft={() => <PeopleList setId={setId} />}
      renderRight={() => <PeopleDetails id={id} />}
    />
  );
};

/* const r = compose(withComponent(ErrorBoundaryIndicator), withComponent(TEST));

const t = r(PeoplePage);

export default t; */

export default withComponentAsHOC(ErrorBoundaryIndicator, {})(PeoplePage);
