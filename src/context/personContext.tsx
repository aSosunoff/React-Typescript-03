import React, { createContext, useContext, useState } from "react";
import { PersonContextFilterType } from "../types/PersonContextFilterType";
import { usePerson } from "../utils/SwapiService";

const PersonContext = createContext<PersonContextFilterType>(
  {} as PersonContextFilterType
);

PersonContext.displayName = "PersonContext";

export const usePersonContext = () => useContext(PersonContext);

export const PersonProvider: React.FC = ({ children }) => {
  const [idPerson, setIdPerson] = useState("0");

  const { data, loading } = usePerson(idPerson);

  return (
    <PersonContext.Provider
      value={{
        person: data,
        loading,
        setIdPerson,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};
