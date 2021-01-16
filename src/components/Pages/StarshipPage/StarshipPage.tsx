import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponentAsHOC } from "../../../HOC/withComponentAsHOC";
import Row from "../../Row";
import {
  StarshipDetails,
  StarshipList,
} from "../../StarComponents/StarComponents";
import { Compose } from "../../../utils/Compose";
import { SetIdProvider } from "../../../context/SetIdContext";

const StarshipPage: React.FC = () => {
  return (
    <SetIdProvider>
      <Row
        renderLeft={() => <StarshipList />}
        renderRight={() => <StarshipDetails />}
      />
    </SetIdProvider>
  );
};

export default Compose(
  withComponentAsHOC(ErrorBoundaryIndicator, () => null),
  withComponentAsHOC(SetIdProvider, () => null)
)(StarshipPage);
