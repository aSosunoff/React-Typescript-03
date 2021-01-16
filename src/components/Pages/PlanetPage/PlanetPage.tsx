import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { Hoc } from "../../../HOC/Hoc";
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
  Hoc(ErrorBoundaryIndicator, () => null),
  Hoc(SetIdProvider, () => null)
)(PlanetPage);
