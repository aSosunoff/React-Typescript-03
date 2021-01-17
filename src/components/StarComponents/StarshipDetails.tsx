import React, { useMemo } from "react";
import { useStarships } from "../../hooks/useSwapiService";
import Details, { Record } from "../Details";
import Spinner from "../Spinner";

export interface IStarshipDetails {
  id: string;
}

export const StarshipDetails: React.FC<IStarshipDetails> = ({ id }) => {
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
