import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponentAsHOC } from "../../../HOC/withComponentAsHOC";
import Row from "../../Row";
import { PlanetDetails, PlanetList } from "../../StarComponents/StarComponents";
import { Compose } from "../../../utils/Compose";
import { SetIdProvider } from "../../../context/SetIdContext";

const PlanetPage: React.FC = () => {
  return (
    <SetIdProvider>
      <Row
        renderLeft={() => <PlanetList />}
        renderRight={() => <PlanetDetails />}
      />
    </SetIdProvider>
  );
};

export default Compose(
  withComponentAsHOC(ErrorBoundaryIndicator, () => null),
  withComponentAsHOC(SetIdProvider, () => null)
)(PlanetPage);
