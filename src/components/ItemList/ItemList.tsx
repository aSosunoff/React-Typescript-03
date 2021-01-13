import React from "react";
import cn from "classnames";
import styles from "./ItemList.module.scss";
import Spinner from "../Spinner";
import { IdType } from "../../types/IdType";

type ItemListType<T> = {
  list: T[];
  showSpinner: boolean;
  setId: (id: string) => void;
  renderTitle: (item: T) => React.ReactNode;
};

const ItemList = <T extends IdType>({
  list,
  showSpinner,
  setId,
  renderTitle,
}: React.PropsWithChildren<ItemListType<T>>) => {
  return (
    <ul className={cn("list-group", styles["item-list"])}>
      {showSpinner ? (
        <Spinner />
      ) : (
        list.map((item) => (
          <li
            key={item.id}
            className={cn("list-group-item", styles["list-group-item"])}
            onClick={() => setId(item.id)}
          >
            {renderTitle(item)}
          </li>
        ))
      )}
    </ul>
  );
};

export default ItemList;
