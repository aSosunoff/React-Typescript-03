import React from "react";
/* import styles from "./App.module.scss";
import cn from "classnames";
import { useAllStarships } from "../../utils/SwapiService"; */
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

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

export default App;
