import React from "react";
import cn from "classnames";
import styles from "./ItemList.module.scss";
import { useAllPeople } from "../../utils/SwapiService";
import Spinner from "../Spinner";
import { usePersonContext } from "../../context/personContext";

const ItemList: React.FC = () => {
  const {
    data: { results = [] },
    loading,
  } = useAllPeople();

  const { setIdPerson } = usePersonContext();

  return (
    <ul className={cn("list-group", styles["item-list"])}>
      {loading ? (
        <Spinner />
      ) : (
        results.map(({ id, name }) => (
          <li
            key={id}
            className={cn("list-group-item", styles["list-group-item"])}
            onClick={() => setIdPerson(id)}
          >
            {name}
          </li>
        ))
      )}
    </ul>
  );
};

export default ItemList;
