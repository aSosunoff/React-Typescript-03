import React, { useMemo } from "react";
import { Hoc } from "../../HOC/Hoc";
import { usePerson } from "../../hooks/useSwapiService";
import Details, { Record } from "../Details";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import Spinner from "../Spinner";

export interface IPeopleDetails {
  id: string;
}

const _PeopleDetails: React.FC<IPeopleDetails> = ({ id }) => {
  const { data, loading } = usePerson(id);

  const DetailsComponent = useMemo(
    () =>
      data ? (
        <Details
          title={data.name || ""}
          imgUrl={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`}
        >
          <Record title="Gender" text={data.gender} />
          <Record title="Birth Year" text={data.birth_year} />
          <Record title="Eye Color" text={data.eye_color} />
        </Details>
      ) : null,
    [data]
  );

  return loading ? <Spinner /> : DetailsComponent;
};

export const PeopleDetails = Hoc<{}, IPeopleDetails>(
  ErrorBoundaryIndicator,
  () => ({})
)(_PeopleDetails);
