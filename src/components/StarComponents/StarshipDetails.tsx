import React, { useMemo } from "react";
import { useSetIdContext } from "../../context/SetIdContext";
import { useStarships } from "../../utils/SwapiService";
import Details, { Record } from "../Details";
import Spinner from "../Spinner";

export const StarshipDetails: React.FC = () => {
  const { id } = useSetIdContext();

  const { data, loading } = useStarships(id);

  const DetailsComponent = useMemo(
    () =>
      data ? (
        <Details
          title={data?.name || ""}
          imgUrl={`https://starwars-visualguide.com/assets/img/starships/${data.id}.jpg`}
        >
          <Record title="Model" text={data.model} />
          <Record title="Length" text={data.length} />
          <Record title="Cost" text={data.cost_in_credits} />
        </Details>
      ) : null,
    [data]
  );

  return loading ? <Spinner /> : DetailsComponent;
};
