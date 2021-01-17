import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { Hoc } from "../../../HOC/Hoc";
import { PeopleList } from "../../StarComponents";

const PeoplePage: React.FC = () => {
  return <PeopleList />;
};

export default Hoc(ErrorBoundaryIndicator, () => null)(PeoplePage);
