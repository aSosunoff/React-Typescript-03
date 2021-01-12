import React from "react";
import cn from "classnames";
import styles from "./ItemList.module.scss";

const ItemList: React.FC = () => {
  return (
    <ul className={cn("list-group", styles["item-list"])}>
      <li className={cn("list-group-item", styles["list-group-item"])}>
        Luke Skywalker
      </li>
      <li className={cn("list-group-item", styles["list-group-item"])}>
        Darth Vader
      </li>
      <li className={cn("list-group-item", styles["list-group-item"])}>
        R2-D2
      </li>
    </ul>
  );
};

export default ItemList;
