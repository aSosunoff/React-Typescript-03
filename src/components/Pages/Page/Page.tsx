import React from "react";
import cn from "classnames";
import Spinner from "../../Spinner";
import { BasePageType } from "../../../types/BasePageType";

type PageType = {
  showSpinnerDetails: boolean;
  renderItems: () => React.ReactNode;
  renderDetails: () => React.ReactNode;
} & BasePageType;

const Page: React.FC<PageType> = ({
  showSpinnerDetails,
  renderItems,
  renderDetails,
  className,
  style,
}) => {
  return (
    <div style={style} className={cn("row mb2", className)}>
      <div className="col-md-6">{renderItems()}</div>
      <div className="col-md-6">
        {showSpinnerDetails ? <Spinner /> : renderDetails()}
      </div>
    </div>
  );
};

export default Page;
