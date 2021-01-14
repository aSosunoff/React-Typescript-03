import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponentAsHOC } from "../../../HOC/withComponentAsHOC";
import Row from "../../Row";
import { BasePageType } from "../../../types/BasePageType";
import { PlanetDetails, PlanetList } from "../../StarComponents/StarComponents";
import { Compose } from "../../../utils/Compose";
import { SetIdProvider } from "../../../context/SetIdContext";

const PlanetPage: React.FC<BasePageType> = (props) => {
  return (
    <Row
      {...props}
      renderLeft={() => <PlanetList />}
      renderRight={() => <PlanetDetails />}
    />
  );
};

export default Compose(
  withComponentAsHOC(ErrorBoundaryIndicator, {}),
  withComponentAsHOC(SetIdProvider, {})
)(PlanetPage);
