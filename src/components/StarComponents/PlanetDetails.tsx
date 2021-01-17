import React, { useMemo } from "react";
import { useRouteMatch, withRouter } from "react-router-dom";
import { Pages } from "../../Enums/Pages";
import { usePlanet } from "../../hooks/useSwapiService";
import Details, { Record } from "../Details";
import Spinner from "../Spinner";

interface IPlanetDetails {
  id: string;
}

export const PlanetDetails: React.FC = () => {
  const match = useRouteMatch<IPlanetDetails>(Pages.PLANET_ID);

  const { data, loading } = usePlanet(match?.params.id || "");

  const DetailsComponent = useMemo(
    () =>
      data ? (
        <Details
          title={data?.name || ""}
          imgUrl={`https://starwars-visualguide.com/assets/img/planets/${data.id}.jpg`}
        >
          <Record title="Diameter" text={data.diameter} />
          <Record title="Orbital Period" text={data.orbital_period} />
        </Details>
      ) : null,
    [data]
  );

  return loading ? <Spinner /> : DetailsComponent;
};
