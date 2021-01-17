import React from "react";
import { StarshipType } from "../../types/StarshipType";
import { useAllStarships } from "../../hooks/useSwapiService";
import ItemList from "../ItemList";
import Spinner from "../Spinner";
import { useHistory } from "react-router-dom";

export const StarshipList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllStarships();

  const history = useHistory();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<StarshipType>
      list={results}
      setId={(id) => history.push(id)}
      renderTitle={({ name }) => `${name}`}
    />
  );
};
