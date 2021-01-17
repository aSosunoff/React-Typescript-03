import React, { useMemo } from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { Hoc } from "../../../HOC/Hoc";
import { PlanetDetails, PlanetList } from "../../StarComponents";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Pages } from "../../../Enums/Pages";
import Row from "../../Row";
import { IPlanetDetails } from "../../StarComponents/PlanetDetails";

const PlanetPage: React.FC = () => {
  const history = useHistory();

  const match = useRouteMatch<IPlanetDetails>(Pages.PLANET_ID);

  const rightSpace = useMemo(
    () =>
      match ? <PlanetDetails id={match.params.id} /> : <>Выберите планету</>,
    [match]
  );

  return (
    <Row
      renderLeft={() => (
        <PlanetList onItemSelected={(id) => history.push(id)} />
      )}
      renderRight={() => rightSpace}
    />
  );
};

export default Hoc(ErrorBoundaryIndicator, () => null)(PlanetPage);
