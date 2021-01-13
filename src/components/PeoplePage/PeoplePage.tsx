import React from "react";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import { PersonProvider } from "../../context/personContext";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import { withComponent } from "../../HOC/withComponent";
/* import styles from "./PeoplePage.module.scss"; */

const PeoplePage: React.FC = () => {
  return (
    <PersonProvider>
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </PersonProvider>
  );
};

export default withComponent(ErrorBoundaryIndicator)(PeoplePage);
