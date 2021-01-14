import React, { useState } from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponent } from "../../../HOC/withComponent";
import { useAllStarships, useStarships } from "../../../utils/SwapiService";
import Page from "../Page";
import ItemList from "../../ItemList";
import { BasePageType } from "../../../types/BasePageType";
import { StarshipType } from "../../../types/StarshipType";
import StarshipDetails from "../../Details/StarshipDetails";

const StarshipPage: React.FC<BasePageType> = ({ className, style }) => {
  const [id, setId] = useState("0");

  const { data, loading: showSpinnerDetails } = useStarships(id);

  const {
    data: { results = [] } = {},
    loading: showSpinnerList,
  } = useAllStarships();

  return (
    <Page
      className={className}
      style={style}
      showSpinnerDetails={showSpinnerDetails}
      renderItems={() => (
        <ItemList<StarshipType>
          list={results}
          showSpinner={showSpinnerList}
          setId={setId}
          renderTitle={({ name }) => `${name}`}
        />
      )}
      renderDetails={() => <StarshipDetails />}
    />
  );
};

export default withComponent(ErrorBoundaryIndicator)(StarshipPage);
