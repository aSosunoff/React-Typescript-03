import React, { useState } from "react";
import cn from "classnames";
import { StyleCommon } from "../../types/StyleCommon";

const ErrorButton: React.FC<StyleCommon> = ({ className, style }) => {
  const [renderError, setRenderError] = useState(false);

  if (renderError) {
    throw new Error("oooops");
  }

  return (
    <button
      className={cn("btn btn-danger btn-sm", className)}
      onClick={() => setRenderError(true)}
      style={style}
    >
      Throw Error
    </button>
  );
};

export default ErrorButton;
