import React from "react";
import { Redirect } from "react-router-dom";
import { Pages } from "../../Enums/Pages";

interface ISecretPage {
  isLoggedIn: boolean;
}

const SecretPage: React.FC<ISecretPage> = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Redirect to={Pages.LOGIN} />;
  }

  return (
    <div className="jumbotron text-center">
      <h3>This page is full of secrets!!!</h3>
    </div>
  );
};

export default SecretPage;
