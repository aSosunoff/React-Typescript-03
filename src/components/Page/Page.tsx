import React from "react";
import Spinner from "../Spinner";

type PageType = {
  showSpinnerDetails: boolean;
  renderItems: () => React.ReactNode;
  renderDetails: () => React.ReactNode;
};

const Page: React.FC<PageType> = ({
  showSpinnerDetails,
  renderItems,
  renderDetails,
}) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{renderItems()}</div>
      <div className="col-md-6">
        {showSpinnerDetails ? <Spinner /> : renderDetails()}
      </div>
    </div>
  );
};

export default Page;
