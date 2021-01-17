import React, { useMemo } from "react";
import { Hoc } from "../../HOC/Hoc";
import { useStarships } from "../../hooks/useSwapiService";
import Details, { Record } from "../Details";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import Spinner from "../Spinner";

export interface IStarshipDetails {
  id: string;
}

const _StarshipDetails: React.FC<IStarshipDetails> = ({ id }) => {
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

export const StarshipDetails = Hoc<{}, IStarshipDetails>(
  ErrorBoundaryIndicator,
  () => ({})
)(_StarshipDetails);
