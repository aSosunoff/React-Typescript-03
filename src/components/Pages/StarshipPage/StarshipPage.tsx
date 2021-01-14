import React, { useState } from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponent } from "../../../HOC/withComponent";
import Row from "../../Row";
import { BasePageType } from "../../../types/BasePageType";
import {
  StarshipDetails,
  StarshipList,
} from "../../StarComponents/StarComponents";

const StarshipPage: React.FC<BasePageType> = ({ className, style }) => {
  const [id, setId] = useState("0");

  return (
    <Row
      className={className}
      style={style}
      renderLeft={() => <StarshipList setId={setId} />}
      renderRight={() => <StarshipDetails id={id} />}
    />
  );
};

export default withComponent(ErrorBoundaryIndicator)(StarshipPage);
