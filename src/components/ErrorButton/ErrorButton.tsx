import React, { useState } from "react";

const ErrorButton: React.FC = () => {
  const [renderError, setRenderError] = useState(false);

  if (renderError) {
    throw new Error("ops");
  }

  return (
    <button
      className="error-button btn btn-danger btn-lg"
      onClick={() => setRenderError(true)}
    >
      Throw Error
    </button>
  );
};

export default ErrorButton;
