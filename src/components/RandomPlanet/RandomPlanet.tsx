import React, { useCallback, useState } from "react";
import cn from "classnames";
import styles from "./RandomPlanet.module.scss";
import { usePlanet } from "../../utils/SwapiService";
import { useInterval } from "../../hooks/useInterval";

const getRundomPlanetId = () => Math.floor(Math.random() * 25) + 2;

const RandomPlanet: React.FC = () => {
  const [idPlanet, setIdPlanet] = useState(getRundomPlanetId());
  
  const updatePlanet = useCallback(() => setIdPlanet(getRundomPlanetId()), []);
  
  useInterval(updatePlanet, 4000);

  const {
    data: { name, population, rotation_period, diameter },
  } = usePlanet(idPlanet);

  return (
    <div className={cn("jumbotron rounded", styles["random-planet"])}>
      <img
        className={styles["planet-image"]}
        alt={`${idPlanet}.jpg`}
        src={`https://starwars-visualguide.com/assets/img/planets/${idPlanet}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className={cn("list-group-flush", styles["list-group"])}>
          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Population</span>
            <span>{population}</span>
          </li>

          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Rotation Period</span>
            <span>{rotation_period}</span>
          </li>

          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomPlanet;
