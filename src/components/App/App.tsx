import React, { useCallback, useState } from "react";

import {
  HomePage,
  LoginPage,
  NotFound404Page,
  PeoplePage,
  PlanetPage,
  SecretPage,
  StarshipPage,
} from "../Pages";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import { Hoc } from "../../HOC/Hoc";
import { Compose } from "../../utils/Compose";
import { SwapiServiceProvider } from "../../context/SwapiServiceContext";
import { Switch } from "react-router-dom";
import { Pages } from "../../Enums/Pages";
import MainLayout from "../Layout";

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onLogin = useCallback(() => {
    setLoggedIn(true);
  }, []);

  return (
    <Switch>
      <MainLayout exact path={Pages.HOME}>
        <HomePage />
      </MainLayout>

      <MainLayout exact path={Pages.PEOPLE_ID_Q}>
        <PeoplePage />
      </MainLayout>

      <MainLayout exact path={Pages.PLANET_ID_Q}>
        <PlanetPage />
      </MainLayout>

      <MainLayout exact path={Pages.STARSHIP_ID_Q}>
        <StarshipPage />
      </MainLayout>

      <MainLayout path={Pages.LOGIN}>
        <LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin} />
      </MainLayout>

      <MainLayout path={Pages.SECRET}>
        <SecretPage isLoggedIn={isLoggedIn} />
      </MainLayout>

      <MainLayout>
        <NotFound404Page />
      </MainLayout>
    </Switch>
  );
};

export default Compose(
  Hoc(ErrorBoundaryIndicator, () => null),
  Hoc(SwapiServiceProvider, () => null)
)(App);
