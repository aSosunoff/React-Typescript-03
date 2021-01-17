import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { Hoc } from "../../../HOC/Hoc";
import { StarshipList } from "../../StarComponents";

const StarshipPage: React.FC = () => {
  return <StarshipList />;
};

export default Hoc(ErrorBoundaryIndicator, () => null)(StarshipPage);
