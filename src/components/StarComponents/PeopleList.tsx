import React from "react";
import { PersonType } from "../../types/PersonType";
import { useAllPeople } from "../../hooks/useSwapiService";
import ItemList from "../ItemList";
import Spinner from "../Spinner";
import { Pages } from "../../Enums/Pages";
import { useHistory } from "react-router-dom";

export const PeopleList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllPeople();

  const history = useHistory();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<PersonType>
      list={results}
      setId={(id) => history.push(`${Pages.PEOPLE}/${id}`)}
      renderTitle={({ name, gender, birth_year }) =>
        `${name} (${gender}), ${birth_year}`
      }
    />
  );
};
