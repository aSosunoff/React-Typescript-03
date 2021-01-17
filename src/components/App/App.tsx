import React, { useCallback, useState } from "react";
import cn from "classnames";
import Header from "../Header";
import styles from "./App.module.scss";

import {
  HomePage,
  LoginPage,
  PeoplePage,
  PlanetPage,
  SecretPage,
  StarshipPage,
} from "../Pages";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import { Hoc } from "../../HOC/Hoc";
import { Compose } from "../../utils/Compose";
import { SwapiServiceProvider } from "../../context/SwapiServiceContext";
import RandomPlanet from "../RandomPlanet";
import { CustomSwitch } from "../UI";
import { Route, Switch } from "react-router-dom";
import { Pages } from "../../Enums/Pages";

const App: React.FC = () => {
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);
  const [isRandom, setRandom] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onLogin = useCallback(() => {
    setLoggedIn(true);
  }, []);

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
        <Route exact path={Pages.HOME}>
          <HomePage />
        </Route>

        <Route exact path={Pages.PEOPLE_ID_Q}>
          <PeoplePage />
        </Route>

        <Route exact path={Pages.PLANET_ID_Q}>
          <PlanetPage />
        </Route>

        <Route exact path={Pages.STARSHIP_ID_Q}>
          <StarshipPage />
        </Route>

        <Route path={Pages.LOGIN}>
          <LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin} />
        </Route>

        <Route path={Pages.SECRET}>
          <SecretPage isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
};

export default Compose(
  Hoc(ErrorBoundaryIndicator, () => null),
  Hoc(SwapiServiceProvider, () => null)
)(App);
