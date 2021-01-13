import React from "react";
import cn from "classnames";
import { PlanetType } from "../../types/PlanetType";
import styles from "./RandomPlanet.module.scss";

const PlanetView: React.FC<{
  planet?: PlanetType;
  idPlanet: string;
}> = ({
  planet: { name, population, rotation_period, diameter } = {},
  idPlanet,
}) => (
  <>
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
  </>
);

export default PlanetView;
