import React, { useState } from "react";
import cn from "classnames";
import Header from "../Header";
import styles from "./App.module.scss";

import PeoplePage from "../Pages/PeoplePage";
import PlanetPage from "../Pages/PlanetPage";
import StarshipPage from "../Pages/StarshipPage";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import { Hoc } from "../../HOC/Hoc";
import { Compose } from "../../utils/Compose";
import { SwapiServiceProvider } from "../../context/SwapiServiceContext";
import RandomPlanet from "../RandomPlanet";
import { CustomSwitch } from "../UI";
import { Redirect, Route, Switch } from "react-router-dom";
import { Pages } from "../../Enums/Pages";
import { PlanetDetails, StarshipDetails } from "../StarComponents";

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

      <Switch>
        <Redirect exact from={Pages.HOME} to={Pages.PEOPLE} />

        <Route exact path={Pages.PEOPLE_ID_Q}>
          <PeoplePage />
        </Route>

        <Route exact path={Pages.PLANET_ID_Q}>
          <PlanetPage />
        </Route>

        <Route exact path={Pages.STARSHIP_ID_Q}>
          <StarshipPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Compose(
  Hoc(ErrorBoundaryIndicator, () => null),
  Hoc(SwapiServiceProvider, () => null)
)(App);
