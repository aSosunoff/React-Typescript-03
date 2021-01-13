import React from "react";
import cn from "classnames";
import { PersonType } from "../../../types/PersonType";
import styles from "./PersonDetails.module.scss";
import ErrorButton from "../../ErrorButton";

const PersonView: React.FC<{ person?: PersonType }> = ({ person }) => {
  if (!person) {
    return null;
  }

  const { id, name, gender, birth_year, eye_color } = person;

  return (
    <div className={cn("card person-details", styles["person-details"])}>
      <img
        className={styles["person-image"]}
        alt={id}
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />

      <div className="card-body">
        <h4>{name}</h4>

        <ul className="list-group list-group-flush">
          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Gender</span>
            <span>{gender}</span>
          </li>

          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Birth Year</span>
            <span>{birth_year}</span>
          </li>

          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Eye Color</span>
            <span>{eye_color}</span>
          </li>
        </ul>

        <ErrorButton />
      </div>
    </div>
  );
};

export default PersonView;
