import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ISwapiService } from "../Interfaces/ISwapiService";
import { FakeSwapiService } from "../utils/FakeSwapiService";
import { SwapiService } from "../utils/SwapiService";

interface ISetService extends ISwapiService {
  toggleService: () => void;
  nameService: string;
}

const SwapiServiceContext = createContext<ISetService>({} as ISetService);

SwapiServiceContext.displayName = "SwapiServiceContext";

export const useSwapiServiceContext = () => useContext(SwapiServiceContext);

export const SwapiServiceProvider: React.FC = ({ children }) => {
  const SwapiServiceInstance = useMemo(() => new SwapiService(), []);
  const FakeSwapiServiceInstance = useMemo(() => new FakeSwapiService(), []);

  const [service, setService] = useState({
    service: SwapiServiceInstance,
    name: SwapiServiceInstance.name,
  });

  const toggleService = useCallback(
    () =>
      setService((prev) =>
        prev.service instanceof FakeSwapiService
          ? {
              name: SwapiServiceInstance.name,
              service: SwapiServiceInstance,
            }
          : {
              name: FakeSwapiServiceInstance.name,
              service: FakeSwapiServiceInstance,
            }
      ),
    [FakeSwapiServiceInstance, SwapiServiceInstance]
  );

  return (
    <SwapiServiceContext.Provider
      value={{
        ...service.service,
        toggleService,
        nameService: service.name,
      }}
    >
      {children}
    </SwapiServiceContext.Provider>
  );
};
