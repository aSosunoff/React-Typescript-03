import React from "react";
import cn from "classnames";
import styles from "./ItemList.module.scss";
import { useAllPeople } from "../../utils/SwapiService";
import Spinner from "../Spinner";
import Item from "./Item";

const ItemList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllPeople();
  return (
    <ul className={cn("list-group", styles["item-list"])}>
      {loading ? (
        <Spinner />
      ) : (
        results.map((item) => <Item key={item.id} item={item} />)
      )}
    </ul>
  );
};

export default ItemList;
