import React, { useState } from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponentAsHOC } from "../../../HOC/withComponentAsHOC";
import Row from "../../Row";
import { BasePageType } from "../../../types/BasePageType";
import {
  StarshipDetails,
  StarshipList,
} from "../../StarComponents/StarComponents";
import { Compose } from "../../../utils/Compose";
import { SetIdProvider } from "../../../context/SetIdContext";

const StarshipPage: React.FC<BasePageType> = ({ className, style }) => {
  return (
    <Row
      className={className}
      style={style}
      renderLeft={() => <StarshipList />}
      renderRight={() => <StarshipDetails />}
    />
  );
};

export default Compose(
  withComponentAsHOC(ErrorBoundaryIndicator, {}),
  withComponentAsHOC(SetIdProvider, {})
)(StarshipPage);
