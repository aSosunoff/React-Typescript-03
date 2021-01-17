import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { Hoc } from "../../../HOC/Hoc";
import { PlanetList } from "../../StarComponents";
const PlanetPage: React.FC = () => {
  return <PlanetList />;
};

export default Hoc(ErrorBoundaryIndicator, () => null)(PlanetPage);
