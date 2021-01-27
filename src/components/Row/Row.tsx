import React from "react";
import cn from "classnames";
import { BasePageType } from "../../types/BasePageType";
import styles from "./Row.module.scss";

type RowType = {
  renderLeft: React.ReactNode;
  renderRight: React.ReactNode;
} & BasePageType;

const Row: React.FC<RowType> = ({ renderLeft, renderRight, className, style }) => {
  return (
    <div style={style} className={cn("row mb2", styles.row, className)}>
      <div className="col-md-6">{renderLeft}</div>
      <div className="col-md-6">{renderRight}</div>
    </div>
  );
};

export default Row;
