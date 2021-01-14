import React, { createContext, useContext, useMemo } from "react";
import { ISwapiService } from "../Interfaces/ISwapiService";
import { SwapiService } from "../utils/SwapiService";

const SwapiServiceContext = createContext<ISwapiService>({} as ISwapiService);

SwapiServiceContext.displayName = "SwapiServiceContext";

export const useSwapiServiceContext = () => useContext(SwapiServiceContext);

export const SwapiServiceProvider: React.FC = ({ children }) => {
  const SwapiServiceInstance = useMemo(() => new SwapiService(), []);

  return (
    <SwapiServiceContext.Provider value={SwapiServiceInstance}>
      {children}
    </SwapiServiceContext.Provider>
  );
};
