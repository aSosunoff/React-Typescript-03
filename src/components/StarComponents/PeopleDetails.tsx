import React, { useMemo } from "react";
import { usePerson } from "../../hooks/useSwapiService";
import Details, { Record } from "../Details";
import Spinner from "../Spinner";

export interface IPeopleDetails {
  id: string;
}

export const PeopleDetails: React.FC<IPeopleDetails> = ({ id }) => {
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
