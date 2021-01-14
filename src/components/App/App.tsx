import React, { useState } from "react";
import cn from "classnames";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import styles from "./App.module.scss";
import ErrorButton from "../ErrorButton";
import PeoplePage from "../Pages/PeoplePage";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import { withComponent } from "../../HOC/withComponent";
import PlanetPage from "../Pages/PlanetPage";

const App: React.FC = () => {
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);
  const [isRandom, setRandom] = useState(false);

  return (
    <div className={cn("container", styles["stardb-app"])}>
      <Header />

      {showRandomPlanet ? <RandomPlanet isInterval={isRandom} /> : null}

      <div className={cn("row mb2", styles["button-row"])}>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            checked={isRandom}
            onChange={() => setRandom((prev) => !prev)}
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            Toggle random
          </label>
        </div>
      </div>

      <div className={cn("row mb2", styles["button-row"], styles["row"])}>
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={() => setShowRandomPlanet((prev) => !prev)}
        >
          Toggle Random Planet
        </button>

        <ErrorButton />
      </div>

      <PeoplePage className={styles["row"]} />

      <PlanetPage className={styles["row"]} />
    </div>
  );
};

export default withComponent(ErrorBoundaryIndicator)(App);
