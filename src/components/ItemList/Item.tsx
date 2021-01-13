import React from "react";
import cn from "classnames";
import styles from "./ItemList.module.scss";
import { PersonType } from "../../types/PersonType";
import { PersonContextFilterType } from "../../types/PersonContextFilterType";

const Item: React.FC<
  { item: PersonType } & Pick<PersonContextFilterType, "setIdPerson">
> = ({ item, setIdPerson }) => {
  return (
    <li
      key={item.id}
      className={cn("list-group-item", styles["list-group-item"])}
      onClick={() => setIdPerson(item.id)}
    >
      {item.name}
    </li>
  );
};

export default Item;
