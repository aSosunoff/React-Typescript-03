import React, { useMemo } from "react";
import { useSetIdContext } from "../../context/SetIdContext";
import { usePlanet } from "../../utils/SwapiService";
import Details, { Record } from "../Details";
import Spinner from "../Spinner";

export const PlanetDetails: React.FC = () => {
  const { id } = useSetIdContext();

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
