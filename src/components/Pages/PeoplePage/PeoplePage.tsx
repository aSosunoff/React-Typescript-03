import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponentAsHOC } from "../../../HOC/withComponentAsHOC";
import Row from "../../Row";
import { BasePageType } from "../../../types/BasePageType";
import { PeopleDetails, PeopleList } from "../../StarComponents/StarComponents";
import { Compose } from "../../../utils/Compose";
import { SetIdProvider } from "../../../context/SetIdContext";

const PeoplePage: React.FC<BasePageType> = ({ className, style }) => {
  return (
    <Row
      className={className}
      style={style}
      renderLeft={() => <PeopleList />}
      renderRight={() => <PeopleDetails />}
    />
  );
};

export default Compose(
  withComponentAsHOC(ErrorBoundaryIndicator, {}),
  withComponentAsHOC(SetIdProvider, {})
)(PeoplePage);
