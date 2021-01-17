import React, { useState } from "react";
import cn from "classnames";
import Header from "../Header";
import { CustomSwitch } from "../UI";
import RandomPlanet from "../RandomPlanet";
import { Route, RouteProps } from "react-router-dom";

interface IMainLayout extends RouteProps {}

const MainLayout: React.FC<IMainLayout> = ({ children, ...routeProps }) => {
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);
  const [isRandom, setRandom] = useState(false);

  return (
    <div className={cn("container")}>
      <Header>
        <CustomSwitch title="On/Off" value={isRandom} onClick={setRandom} />
        <CustomSwitch
          title="Show/Hide"
          value={showRandomPlanet}
          onClick={setShowRandomPlanet}
        />
      </Header>

      {showRandomPlanet ? <RandomPlanet isInterval={isRandom} /> : null}

      <Route {...routeProps}>{children}</Route>
    </div>
  );
};

export default MainLayout;
