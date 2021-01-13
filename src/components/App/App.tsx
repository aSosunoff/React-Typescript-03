import React from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import { withContext } from "../../HOC/withContext";
import { PersonProvider } from "../../context/personContext";

const App: React.FC = () => {
  return (
    <div className="stardb-app container">
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

export default withContext(PersonProvider, undefined, App);
