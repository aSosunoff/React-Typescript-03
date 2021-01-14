import React from "react";
import { useSetIdContext } from "../../context/SetIdContext";
import { PersonType } from "../../types/PersonType";
import { useAllPeople } from "../../utils/SwapiService";
import ItemList from "../ItemList";
import Spinner from "../Spinner";

export const PeopleList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllPeople();

  const { setId } = useSetIdContext();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<PersonType>
      list={results}
      setId={setId}
      renderTitle={({ name, gender, birth_year }) =>
        `${name} (${gender}), ${birth_year}`
      }
    />
  );
};
