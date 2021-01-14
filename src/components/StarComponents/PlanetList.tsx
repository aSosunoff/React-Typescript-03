import React from "react";
import { useSetIdContext } from "../../context/SetIdContext";
import { PlanetType } from "../../types/PlanetType";
import { useAllPlanet } from "../../utils/SwapiService";
import ItemList from "../ItemList";
import Spinner from "../Spinner";

export const PlanetList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllPlanet();

  const { setId } = useSetIdContext();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<PlanetType>
      list={results}
      setId={setId}
      renderTitle={({ name }) => `${name}`}
    />
  );
};
