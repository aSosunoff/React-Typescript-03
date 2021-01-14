import React, { useState } from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponent } from "../../../HOC/withComponent";
import { useAllStarships, useStarships } from "../../../utils/SwapiService";
import Row from "../../Row";
import ItemList from "../../ItemList";
import { BasePageType } from "../../../types/BasePageType";
import { StarshipType } from "../../../types/StarshipType";
import Details from "../../Details/Details";
import { Record } from "../../Details/Details/Details";

const StarshipPage: React.FC<BasePageType> = ({ className, style }) => {
  const [id, setId] = useState("0");

  const { data, loading: showSpinnerDetails } = useStarships(id);

  const {
    data: { results = [] } = {},
    loading: showSpinnerList,
  } = useAllStarships();

  return (
    <Row
      className={className}
      style={style}
      spinnerLeft={showSpinnerList}
      renderLeft={() => (
        <ItemList<StarshipType>
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
            imgUrl={`https://starwars-visualguide.com/assets/img/starships/${data.id}.jpg`}
          >
            <Record title="Model" text={data.model} />
            <Record title="Length" text={data.length} />
            <Record title="Cost" text={data.cost_in_credits} />
          </Details>
        )
      }
    />
  );
};

export default withComponent(ErrorBoundaryIndicator)(StarshipPage);
