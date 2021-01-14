import React, { useState } from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponent } from "../../../HOC/withComponent";
import { useAllPlanet, usePlanet } from "../../../utils/SwapiService";
import Row from "../../Row";
import ItemList from "../../ItemList";
import { PlanetType } from "../../../types/PlanetType";
import { BasePageType } from "../../../types/BasePageType";
import Details, { Record } from "../../Details";

const PlanetPage: React.FC<BasePageType> = ({ className, style }) => {
  const [id, setId] = useState("0");

  const { data, loading: showSpinnerDetails } = usePlanet(id);

  const {
    data: { results = [] } = {},
    loading: showSpinnerList,
  } = useAllPlanet();

  return (
    <Row
      className={className}
      style={style}
      spinnerLeft={showSpinnerList}
      renderLeft={() => (
        <ItemList<PlanetType>
          list={results}
          setId={setId}
          renderTitle={({ name }) => `${name}`}
        />
      )}
      spinnerRight={showSpinnerDetails}
      renderRight={() =>
        data && (
          <Details
            title={data?.name || ""}
            imgUrl={`https://starwars-visualguide.com/assets/img/planets/${data.id}.jpg`}
          >
            <Record title="Diameter" text={data.diameter} />
            <Record title="Orbital Period" text={data.orbital_period} />
          </Details>
        )
      }
    />
  );
};

export default withComponent(ErrorBoundaryIndicator)(PlanetPage);
