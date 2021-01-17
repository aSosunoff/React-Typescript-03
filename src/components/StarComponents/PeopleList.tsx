import React from "react";
import { PersonType } from "../../types/PersonType";
import { useAllPeople } from "../../hooks/useSwapiService";
import ItemList from "../ItemList";
import Spinner from "../Spinner";

interface IPeopleList {
  onItemSelected: (id: string) => void;
}

export const PeopleList: React.FC<IPeopleList> = ({ onItemSelected }) => {
  const { data: { results = [] } = {}, loading } = useAllPeople();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<PersonType>
      list={results}
      setId={onItemSelected}
      renderTitle={({ name, gender, birth_year }) =>
        `${name} (${gender}), ${birth_year}`
      }
    />
  );
};
