import React, { createContext, useContext, useState } from "react";

type SetIdContextType = {
  setId: (id: string) => void;
  id: string;
};

const SetIdContext = createContext<SetIdContextType>({} as SetIdContextType);

SetIdContext.displayName = "SetIdContext";

export const useSetIdContext = () => useContext(SetIdContext);

interface ISetIdProvider {
  id?: string;
}

export const SetIdProvider: React.FC<ISetIdProvider> = ({
  children,
  id = "0",
}) => {
  const [idState, setId] = useState(id);

  return (
    <SetIdContext.Provider
      value={{
        id: idState,
        setId,
      }}
    >
      {children}
    </SetIdContext.Provider>
  );
};
