import React from "react";
import { PlanetType } from "../../types/PlanetType";
import { useAllPlanet } from "../../hooks/useSwapiService";
import ItemList from "../ItemList";
import Spinner from "../Spinner";

interface IPlanetList {
  onItemSelected: (id: string) => void;
}

export const PlanetList: React.FC<IPlanetList> = ({ onItemSelected }) => {
  const { data: { results = [] } = {}, loading } = useAllPlanet();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<PlanetType>
      list={results}
      setId={onItemSelected}
      renderTitle={({ name }) => `${name}`}
    />
  );
};
