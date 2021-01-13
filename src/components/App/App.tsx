import React, { useState } from "react";
import cn from "classnames";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import styles from "./App.module.scss";
import ErrorButton from "../ErrorButton";
import PeoplePage from "../PeoplePage";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";

const App: React.FC = () => {
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);

  return (
    <ErrorBoundaryIndicator>
      <div className={cn("container", styles["stardb-app"])}>
        <Header />

        {showRandomPlanet ? <RandomPlanet /> : null}

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
      </div>
    </ErrorBoundaryIndicator>
  );
};

export default App;
