import React from "react";
import cn from "classnames";
import styles from "./Details.module.scss";
import ErrorButton from "../ErrorButton";

type RecordType = {
  title: string;
  text: string;
};

export const Record: React.FC<RecordType> = ({ text, title }) => {
  return (
    <li className={cn("list-group-item", styles["list-group-item"])}>
      <span className={styles["term"]}>{title}</span>
      <span>{text}</span>
    </li>
  );
};

type DetailsType = {
  imgUrl: string;
  title: string;
  children: React.ReactElement<RecordType>[];
};

const Details: React.FC<DetailsType> = ({ imgUrl, title, children }) => {
  return (
    <div className={cn("card person-details", styles["person-details"])}>
      <img className={styles["person-image"]} alt="img" src={imgUrl} />

      <div className="card-body">
        <h4>{title}</h4>

        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => React.cloneElement(child))}
        </ul>

        <ErrorButton />
      </div>
    </div>
  );
};

export default Details;
