import React from "react";
import cn from "classnames";
import { PersonType } from "../../types/PersonType";
import styles from "./PersonDetails.module.scss";

const PersonView: React.FC<{ person?: PersonType }> = ({ person }) => {
  if (!person) {
    return null;
  }

  return (
    <div className={cn("card person-details", styles["person-details"])}>
      <img
        className={styles["person-image"]}
        alt={person.id}
        src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
      />

      <div className="card-body">
        <h4>{person.name}</h4>

        <ul className="list-group list-group-flush">
          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Gender</span>
            <span>{person.gender}</span>
          </li>

          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Birth Year</span>
            <span>{person.birth_year}</span>
          </li>

          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Eye Color</span>
            <span>{person.eye_color}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonView;
