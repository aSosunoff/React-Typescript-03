import React, { useState } from "react";
import cn from "classnames";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import styles from "./App.module.scss";
import ErrorButton from "../ErrorButton";
import PeoplePage from "../Pages/PeoplePage";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import { withComponentAsHOC } from "../../HOC/withComponentAsHOC";
import PlanetPage from "../Pages/PlanetPage";
import StarshipPage from "../Pages/StarshipPage";
import { Compose } from "../../utils/Compose";
import { SwapiServiceProvider } from "../../context/SwapiServiceContext";

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

      <div className={cn("row mb2", styles["button-row"])}>
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={() => setShowRandomPlanet((prev) => !prev)}
        >
          Toggle Random Planet
        </button>

        <ErrorButton />
      </div>

      <PeoplePage />

      <PlanetPage />

      <StarshipPage />
    </div>
  );
};

export default Compose(
  withComponentAsHOC(ErrorBoundaryIndicator, {}),
  withComponentAsHOC(SwapiServiceProvider, {})
)(App);
