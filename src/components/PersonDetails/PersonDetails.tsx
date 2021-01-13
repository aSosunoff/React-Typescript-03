import React from "react";
import { usePersonContext } from "../../context/personContext";
import Spinner from "../Spinner";
import PersonView from "./PersonView";

const PersonDetails: React.FC = () => {
  const { person, loading } = usePersonContext();

  return loading ? <Spinner /> : <PersonView person={person} />;
};

export default PersonDetails;
