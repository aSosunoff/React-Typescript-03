import React, { useState } from "react";
import ErrorBoundaryIndicator from "../ErrorBoundaryIndicator";
import { withComponent } from "../../HOC/withComponent";
import { useAllPlanet, usePlanet } from "../../utils/SwapiService";
import Page from "../Page";
import ItemList from "../ItemList";
import { PlanetType } from "../../types/PlanetType";
import PlanetDetails from "../PlanetDetails";

const PlanetPage: React.FC = () => {
  const [id, setId] = useState("0");

  const { data, loading: showSpinnerDetails } = usePlanet(id);

  const {
    data: { results = [] } = {},
    loading: showSpinnerList,
  } = useAllPlanet();

  return (
    <Page
      showSpinnerDetails={showSpinnerDetails}
      renderItems={() => (
        <ItemList<PlanetType>
          list={results}
          showSpinner={showSpinnerList}
          setId={setId}
          renderTitle={({ name }) => `${name}`}
        />
      )}
      renderDetails={() => <PlanetDetails />}
    />
  );
};

export default withComponent(ErrorBoundaryIndicator)(PlanetPage);
