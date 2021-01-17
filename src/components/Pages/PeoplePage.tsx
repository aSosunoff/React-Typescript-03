import React, { useMemo } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import { Hoc } from "../../HOC/Hoc";
import { PeopleDetails, PeopleList } from "../StarComponents";
import Row from "../Row";
import { Pages } from "../../Enums/Pages";
import { IPeopleDetails } from "../StarComponents/PeopleDetails";

const PeoplePage: React.FC = () => {
  const history = useHistory();

  const match = useRouteMatch<IPeopleDetails>(Pages.PEOPLE_ID);

  const rightSpace = useMemo(
    () =>
      match ? <PeopleDetails id={match.params.id} /> : <>Выберите человека</>,
    [match]
  );

  return (
    <Row
      renderLeft={() => (
        <PeopleList onItemSelected={(id) => history.push(id)} />
      )}
      renderRight={() => rightSpace}
    />
  );
};

export default Hoc(ErrorBoundaryIndicator, () => null)(PeoplePage);
