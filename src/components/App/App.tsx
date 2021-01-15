import React, { useState } from "react";
import cn from "classnames";
import Header from "../Header";
import styles from "./App.module.scss";

import PeoplePage from "../Pages/PeoplePage";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import { withComponentAsHOC } from "../../HOC/withComponentAsHOC";
import PlanetPage from "../Pages/PlanetPage";
import StarshipPage from "../Pages/StarshipPage";
import { Compose } from "../../utils/Compose";
import { SwapiServiceProvider } from "../../context/SwapiServiceContext";
import RandomPlanet from "../RandomPlanet";
import { CustomSwitch } from "../UI";

const App: React.FC = () => {
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);
  const [isRandom, setRandom] = useState(false);

  return (
    <div className={cn("container", styles["stardb-app"])}>
      <Header>
        <CustomSwitch title="On/Off" value={isRandom} onClick={setRandom} />
        <CustomSwitch
          title="Show/Hide"
          value={showRandomPlanet}
          onClick={setShowRandomPlanet}
        />
        
      </Header>

      {showRandomPlanet ? <RandomPlanet isInterval={isRandom} /> : null}

      {/* <div className={cn("row mb2", styles["button-row"])}>
        <div className="col">
          <ErrorButton />
        </div>
      </div> */}

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
