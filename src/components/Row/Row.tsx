import React from "react";
import cn from "classnames";
import { BasePageType } from "../../types/BasePageType";
import Spinner from "../Spinner";

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
  const _renderLeft = renderLeft() || null;
  const Left = _renderLeft !== true ? _renderLeft : <Spinner />;
  const _renderRight = renderRight() || null;
  const Right = _renderRight !== true ? _renderRight : <Spinner />;
  return (
    <div style={style} className={cn("row mb2", className)}>
      <div className="col-md-6">{Left}</div>
      <div className="col-md-6">{Right}</div>
    </div>
  );
};

export default Row;
