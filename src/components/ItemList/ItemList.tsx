import React, { useCallback, useMemo } from "react";
import cn from "classnames";
import styles from "./ItemList.module.scss";
import { useAllPeople } from "../../utils/SwapiService";
import Spinner from "../Spinner";

const ItemList: React.FC = () => {
  const {
    data: { results = [] },
    loading,
  } = useAllPeople();

  const setPerson = useCallback((id: string) => {
    console.log(id);
  }, []);

  return (
    <ul className={cn("list-group", styles["item-list"])}>
      {loading ? (
        <Spinner />
      ) : (
        results.map(({ id, name }) => (
          <li
            key={id}
            className={cn("list-group-item", styles["list-group-item"])}
            onClick={() => setPerson(id)}
          >
            {name}
          </li>
        ))
      )}
    </ul>
  );
};

export default ItemList;
