import React from "react";
import cn from "classnames";
import styles from "./ItemList.module.scss";
import { useAllPeople } from "../../utils/SwapiService";
import Spinner from "../Spinner";
import { usePersonContext } from "../../context/personContext";
import Item from "./Item";

const ItemList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllPeople();

  const { setIdPerson } = usePersonContext();

  return (
    <ul className={cn("list-group", styles["item-list"])}>
      {loading ? (
        <Spinner />
      ) : (
        results.map((item) => (
          <Item key={item.id} item={item} setIdPerson={setIdPerson} />
        ))
      )}
    </ul>
  );
};

export default ItemList;
