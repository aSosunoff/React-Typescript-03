import React, { useState } from "react";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import { withComponent } from "../../HOC/withComponent";
import { PersonType } from "../../types/PersonType";
import { useAllPeople, usePerson } from "../../utils/SwapiService";
import PersonDetails from "../PersonDetails/PersonDetails";
import Page from "../Page";
import ItemList from "../ItemList";

const PeoplePage: React.FC = () => {
  const [idPerson, setIdPerson] = useState("0");

  const { data, loading: showSpinnerDetails } = usePerson(idPerson);

  const {
    data: { results = [] } = {},
    loading: showSpinnerList,
  } = useAllPeople();

  return (
    <Page
      showSpinnerDetails={showSpinnerDetails}
      renderItems={() => (
        <ItemList<PersonType>
          list={results}
          showSpinner={showSpinnerList}
          setId={setIdPerson}
          renderTitle={({ name, gender, birth_year }) =>
            `${name} (${gender}), ${birth_year}`
          }
        />
      )}
      renderDetails={() => <PersonDetails person={data} />}
    />
  );
};

export default withComponent(ErrorBoundaryIndicator)(PeoplePage);
