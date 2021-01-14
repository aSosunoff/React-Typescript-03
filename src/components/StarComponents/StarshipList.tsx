import React from "react";
import { useSetIdContext } from "../../context/SetIdContext";
import { StarshipType } from "../../types/StarshipType";
import { useAllStarships } from "../../hooks/useSwapiService";
import ItemList from "../ItemList";
import Spinner from "../Spinner";

export const StarshipList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllStarships();

  const { setId } = useSetIdContext();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<StarshipType>
      list={results}
      setId={setId}
      renderTitle={({ name }) => `${name}`}
    />
  );
};
