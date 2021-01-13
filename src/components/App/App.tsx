import React, { useCallback, useState } from "react";
import cn from "classnames";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import { withContext } from "../../HOC/withContext";
import { PersonProvider } from "../../context/personContext";
import styles from "./App.module.scss";
import ErrorButton from "../ErrorButton";

const App: React.FC = () => {
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);

  const toggleRandomPlanet = useCallback(
    () => setShowRandomPlanet((prev) => !prev),
    []
  );

  return (
    <div className={cn("container", styles["stardb-app"])}>
      <Header />

      {showRandomPlanet ? <RandomPlanet /> : null}

      <div className={cn("row mb2", styles["button-row"])}>
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />
      </div>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default withContext(PersonProvider, undefined, App);
