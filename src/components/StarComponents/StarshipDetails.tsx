import React, { useMemo } from "react";
import { useRouteMatch } from "react-router-dom";
import { Pages } from "../../Enums/Pages";
import { useStarships } from "../../hooks/useSwapiService";
import Details, { Record } from "../Details";
import Spinner from "../Spinner";

interface IStarshipDetails {
  id: string;
}

export const StarshipDetails: React.FC = () => {
  const match = useRouteMatch<IStarshipDetails>(Pages.STARSHIP_ID);

  const { data, loading } = useStarships(match?.params.id || "");

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
