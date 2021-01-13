import React, { useCallback, useState } from "react";
import cn from "classnames";
import styles from "./RandomPlanet.module.scss";
import { usePlanet } from "../../utils/SwapiService";
import { useInterval } from "../../hooks/useInterval";
import Spinner from "../Spinner";
import PlanetView from "./PlanetView";
import ErrorIndicator from "../ErrorIndicator";

const getRundomPlanetId = () => `${Math.floor(Math.random() * 25) + 2}`;

type RandomPlanetType = {
  isInterval?: boolean;
};

const RandomPlanet: React.FC<RandomPlanetType> = ({ isInterval = true }) => {
  const [idPlanet, setIdPlanet] = useState(getRundomPlanetId());

  const updatePlanet = useCallback(() => setIdPlanet(getRundomPlanetId()), []);

  useInterval(() => isInterval && updatePlanet(), 4000);

  const { data, loading, error } = usePlanet(idPlanet);

  return (
    <div className={cn("jumbotron rounded", styles["random-planet"])}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorIndicator />
      ) : (
        <PlanetView planet={data} idPlanet={idPlanet} />
      )}
    </div>
  );
};

export default RandomPlanet;
