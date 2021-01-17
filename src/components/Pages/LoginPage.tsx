import React from "react";
import { Redirect } from "react-router-dom";
import { Pages } from "../../Enums/Pages";

interface ILoginPage {
  isLoggedIn: boolean;
  onLogin: () => any;
}

const LoginPage: React.FC<ILoginPage> = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to={Pages.HOME} />;
  }

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
