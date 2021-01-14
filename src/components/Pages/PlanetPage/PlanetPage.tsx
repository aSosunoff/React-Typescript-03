import React, { useState } from "react";
import ErrorBoundaryIndicator from "../../ErrorBoundaryIndicator";
import { withComponent } from "../../../HOC/withComponent";
import Row from "../../Row";
import { BasePageType } from "../../../types/BasePageType";
import { PlanetDetails, PlanetList } from "../../StarComponents/StarComponents";

const PlanetPage: React.FC<BasePageType> = ({ className, style }) => {
  const [id, setId] = useState("0");

  return (
    <Row
      className={className}
      style={style}
      renderLeft={() => <PlanetList setId={setId} />}
      renderRight={() => <PlanetDetails id={id} />}
    />
  );
};

export default withComponent(ErrorBoundaryIndicator)(PlanetPage);
