import React, { useState } from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponent } from "../../../HOC/withComponent";
import { PersonType } from "../../../types/PersonType";
import { useAllPeople, usePerson } from "../../../utils/SwapiService";
import Details, { Record } from "../../Details";
import Row from "../../Row";
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
    <Row
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
      renderRight={() =>
        data && (
          <Details
            title={data?.name || ""}
            imgUrl={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`}
          >
            <Record title="Gender" text={data.gender} />
            <Record title="Birth Year" text={data.birth_year} />
            <Record title="Eye Color" text={data.eye_color} />
          </Details>
        )
      }
    />
  );
};

export default withComponent(ErrorBoundaryIndicator)(PeoplePage);
