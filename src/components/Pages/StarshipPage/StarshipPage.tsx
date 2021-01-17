import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { Hoc } from "../../../HOC/Hoc";
import { StarshipList } from "../../StarComponents";
import { Pages } from "../../../Enums/Pages";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  IStarshipDetails,
  StarshipDetails,
} from "../../StarComponents/StarshipDetails";
import Row from "../../Row";

const StarshipPage: React.FC = () => {
  const history = useHistory();

  const match = useRouteMatch<IStarshipDetails>(Pages.STARSHIP_ID);

  return (
    <Row
      renderLeft={() => (
        <StarshipList onItemSelected={(id) => history.push(id)} />
      )}
      renderRight={() => <StarshipDetails id={match?.params.id || ""} />}
    />
  );
};

export default Hoc(ErrorBoundaryIndicator, () => null)(StarshipPage);
