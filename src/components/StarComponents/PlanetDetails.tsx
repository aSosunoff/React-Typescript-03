import React, { useMemo } from "react";
import { Hoc } from "../../HOC/Hoc";
import { usePlanet } from "../../hooks/useSwapiService";
import Details, { Record } from "../Details";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import Spinner from "../Spinner";

export interface IPlanetDetails {
  id: string;
}

const _PlanetDetails: React.FC<IPlanetDetails> = ({ id }) => {
  const { data, loading } = usePlanet(id);

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

export const PlanetDetails = Hoc<{}, IPlanetDetails>(
  ErrorBoundaryIndicator,
  () => ({})
)(_PlanetDetails);
