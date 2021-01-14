import React from "react";
import cn from "classnames";
import { BasePageType } from "../../types/BasePageType";

type RowType = {
  renderLeft: () => React.ReactNode;
  renderRight: () => React.ReactNode;
} & BasePageType;

const Row: React.FC<RowType> = ({
  renderLeft,
  renderRight,
  className,
  style,
}) => {
  return (
    <div style={style} className={cn("row mb2", className)}>
      <div className="col-md-6">{renderLeft()}</div>
      <div className="col-md-6">{renderRight()}</div>
    </div>
  );
};

export default Row;
