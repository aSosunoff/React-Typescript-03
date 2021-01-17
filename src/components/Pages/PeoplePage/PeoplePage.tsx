import React from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { Hoc } from "../../../HOC/Hoc";
import { PeopleDetails, PeopleList } from "../../StarComponents";
import { useHistory, useRouteMatch } from "react-router-dom";
import Row from "../../Row";
import { Pages } from "../../../Enums/Pages";
import { IPeopleDetails } from "../../StarComponents/PeopleDetails";

const PeoplePage: React.FC = () => {
  const history = useHistory();

  const match = useRouteMatch<IPeopleDetails>(Pages.PEOPLE_ID);

  return (
    <Row
      renderLeft={() => (
        <PeopleList onItemSelected={(id) => history.push(id)} />
      )}
      renderRight={() => <PeopleDetails id={match?.params.id || ""} />}
    />
  );
};

export default Hoc(ErrorBoundaryIndicator, () => null)(PeoplePage);
