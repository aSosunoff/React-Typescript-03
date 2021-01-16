import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { Hoc } from "../../../HOC/Hoc";
import Row from "../../Row";
import { PeopleDetails, PeopleList } from "../../StarComponents/StarComponents";
import { Compose } from "../../../utils/Compose";
import { SetIdProvider } from "../../../context/SetIdContext";

const PeoplePage: React.FC = () => {
  return (
    <Row
      renderLeft={() => <PeopleList />}
      renderRight={() => <PeopleDetails />}
    />
  );
};

export default Compose(
  Hoc(ErrorBoundaryIndicator, () => null),
  Hoc(SetIdProvider, () => null)
)(PeoplePage);
