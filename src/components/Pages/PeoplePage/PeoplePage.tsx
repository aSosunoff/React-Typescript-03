import React, { useState } from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponent } from "../../../HOC/withComponent";
import { PersonType } from "../../../types/PersonType";
import { useAllPeople, usePerson } from "../../../utils/SwapiService";
import PersonDetails from "../../Details/PersonDetails/PersonDetails";
import Page from "../../Row";
import ItemList from "../../ItemList";
import { BasePageType } from "../../../types/BasePageType";

const PeoplePage: React.FC<BasePageType> = ({ className, style }) => {
  const [idPerson, setIdPerson] = useState("0");

  const { data, loading: showSpinnerDetails } = usePerson(idPerson);

  const {
    data: { results = [] } = {},
    loading: showSpinnerList,
  } = useAllPeople();

  return (
    <Page
      className={className}
      style={style}
      spinnerLeft={showSpinnerList}
      renderLeft={() => (
        <ItemList<PersonType>
          list={results}
          setId={setIdPerson}
          renderTitle={({ name, gender, birth_year }) =>
            `${name} (${gender}), ${birth_year}`
          }
        />
      )}
      spinnerRight={showSpinnerDetails}
      renderRight={() => <PersonDetails person={data} />}
    />
  );
};

export default withComponent(ErrorBoundaryIndicator)(PeoplePage);
