import React from "react";
import cn from "classnames";
import styles from "./PersonDetails.module.scss";

const PersonDetails: React.FC = () => {
  return (
    <div className={cn("card", styles["person-details"])}>
      <img
        className={styles["person-image"]}
        alt="img"
        src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
      />

      <div className="card-body">
        <h4>R2-D2</h4>
        <ul className="list-group list-group-flush">
          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Gender</span>
            <span>male</span>
          </li>
          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Birth Year</span>
            <span>43</span>
          </li>
          <li className={cn("list-group-item", styles["list-group-item"])}>
            <span className={styles["term"]}>Eye Color</span>
            <span>red</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonDetails;
