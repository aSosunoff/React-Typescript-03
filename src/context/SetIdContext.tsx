import React, { createContext, useContext, useState } from "react";

type SetIdContextType = {
  setId: (id: string) => void;
  id: string;
};

const SetIdContext = createContext<SetIdContextType>({} as SetIdContextType);

SetIdContext.displayName = "SetIdContext";

export const useSetIdContext = () => useContext(SetIdContext);

export const SetIdProvider: React.FC = ({ children }) => {
  const [id, setId] = useState("0");

  return (
    <SetIdContext.Provider
      value={{
        id,
        setId,
      }}
    >
      {children}
    </SetIdContext.Provider>
  );
};
