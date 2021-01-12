import React from "react";
import cn from "classnames";
import styles from "./RandomPlanet.module.scss";

const RandomPlanet: React.FC = () => {
  return (
    <div className={cn("jumbotron rounded", styles["random-planet"])}>
      <img
        className={styles["planet-image"]}
        alt="img"
        src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
      />
      <div>
        <h4>Planet Name</h4>
        <ul className={cn("list-group-flush", styles["list-group"])}>
          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Population</span>
            <span>123124</span>
          </li>
          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Rotation Period</span>
            <span>43</span>
          </li>
          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Diameter</span>
            <span>100</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomPlanet;
