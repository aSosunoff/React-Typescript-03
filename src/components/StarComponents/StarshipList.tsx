import React from "react";
import { StarshipType } from "../../types/StarshipType";
import { useAllStarships } from "../../hooks/useSwapiService";
import ItemList from "../ItemList";
import Spinner from "../Spinner";

interface IStarshipList {
  onItemSelected: (id: string) => void;
}

export const StarshipList: React.FC<IStarshipList> = ({ onItemSelected }) => {
  const { data: { results = [] } = {}, loading } = useAllStarships();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<StarshipType>
      list={results}
      setId={onItemSelected}
      renderTitle={({ name }) => `${name}`}
    />
  );
};
