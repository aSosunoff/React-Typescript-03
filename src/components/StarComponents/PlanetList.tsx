import React from "react";
import { PlanetType } from "../../types/PlanetType";
import { useAllPlanet } from "../../hooks/useSwapiService";
import ItemList from "../ItemList";
import Spinner from "../Spinner";
import { Pages } from "../../Enums/Pages";
import { useHistory } from "react-router-dom";

export const PlanetList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllPlanet();

  const history = useHistory();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<PlanetType>
      list={results}
      setId={(id) => history.push(`${Pages.PLANET}/${id}`)}
      renderTitle={({ name }) => `${name}`}
    />
  );
};
