import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { useSwapiServiceContext } from "../../context/SwapiServiceContext";

const Header: React.FC = ({ children }) => {
  const { toggleService, nameService } = useSwapiServiceContext();
  return (
    <div className="row">
      <div className="col">
        <div className={cn("d-flex", styles.header)}>
          <h3>
            <a href="/#">Star DB</a>
          </h3>

          <ul className="d-flex">
            <li>
              <a href="/#">People</a>
            </li>
            <li>
              <a href="/#">Planets</a>
            </li>
            <li>
              <a href="/#">Starships</a>
            </li>
          </ul>

          <button
            onClick={toggleService}
            className="btn btn-primary btn-sm"
            style={{
              height: "2.2rem",
              marginTop: "3px",
            }}
          >
            Change Service ( current {nameService} )
          </button>

          <ul className="d-flex" style={{ paddingLeft: 0 }}>
            {React.Children.map(children, (child) => (
              <li>{React.cloneElement(child as any)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
