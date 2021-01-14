import React from "react";
import cn from "classnames";
import { BasePageType } from "../../types/BasePageType";
import Spinner from "../Spinner";

type RowType = {
  renderLeft: () => React.ReactNode;
  renderRight: () => React.ReactNode;
  spinnerLeft: boolean;
  spinnerRight: boolean;
} & BasePageType;

const Row: React.FC<RowType> = ({
  renderLeft,
  renderRight,
  spinnerLeft,
  spinnerRight,
  className,
  style,
}) => {
  return (
    <div style={style} className={cn("row mb2", className)}>
      <div className="col-md-6">{spinnerLeft ? <Spinner /> : renderLeft()}</div>
      <div className="col-md-6">
        {spinnerRight ? <Spinner /> : renderRight()}
      </div>
    </div>
  );
};

export default Row;
