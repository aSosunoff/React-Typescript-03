import React from "react";
import cn from "classnames";
import styles from "./ItemList.module.scss";
import { IdType } from "../../types/IdType";

type ItemListType<T> = {
  list: T[];
  setId: (id: string) => void;
  renderTitle: (item: T) => React.ReactNode;
};

const ItemList = <T extends IdType>({
  list,
  setId,
  renderTitle,
}: React.PropsWithChildren<ItemListType<T>>) => {
  return (
    <ul className={cn("list-group", styles["item-list"])}>
      {list.map((item) => (
        <li
          key={item.id}
          className={cn("list-group-item", styles["list-group-item"])}
          onClick={() => setId(item.id)}
        >
          {renderTitle(item)}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
