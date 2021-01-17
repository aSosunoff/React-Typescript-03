import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { useSwapiServiceContext } from "../../context/SwapiServiceContext";
import ErrorButton from "../ErrorButton";
import { Link } from "react-router-dom";
import { Pages } from "../../Enums/Pages";

const Header: React.FC = ({ children }) => {
  const { toggleService, nameService } = useSwapiServiceContext();
  return (
    <>
      <div className="row">
        <div className="col">
          <div className={cn("d-flex", styles.header)}>
            <h3>
              <Link to={Pages.HOME}>Star DB</Link>
            </h3>

            <ul className="d-flex">
              <li>
                <Link to={Pages.PEOPLE}>People</Link>
              </li>
              <li>
                <Link to={Pages.PLANET}>Planets</Link>
              </li>
              <li>
                <Link to={Pages.STARSHIP}>Starships</Link>
              </li>
              <li>
                <Link to={Pages.LOGIN}>Login</Link>
              </li>
              <li>
                <Link to={Pages.SECRET}>Secret</Link>
              </li>

              <ul className="d-flex" style={{ paddingLeft: 0 }}>
                {React.Children.map(children, (child) => (
                  <li>{React.cloneElement(child as any)}</li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className={cn("d-flex", styles.header)}>
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

            <ErrorButton
              style={{
                height: "2.2rem",
                marginTop: "3px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
