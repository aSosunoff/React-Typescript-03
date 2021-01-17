import React, { useMemo } from "react";
import { useRouteMatch } from "react-router-dom";
import { Pages } from "../../Enums/Pages";
import { usePerson } from "../../hooks/useSwapiService";
import Details, { Record } from "../Details";
import Spinner from "../Spinner";

interface IPeopleDetails {
  id: string;
}

export const PeopleDetails: React.FC = () => {
  const match = useRouteMatch<IPeopleDetails>(Pages.PEOPLE_ID);

  const { data, loading } = usePerson(match?.params.id || "");

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
