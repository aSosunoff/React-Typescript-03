import React from "react";
import ErrorBoundary from "../../HOC/ErrorBoundary";
import ErrorIndicator from "../ErrorIndicator";

const ErrorBoundaryIndicator: React.FC = ({ children }) => {
  return (
    <ErrorBoundary>
      {(error) => (error ? <ErrorIndicator /> : children)}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryIndicator;
