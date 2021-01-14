import React, { useMemo } from "react";
import { useSetIdContext } from "../../context/SetIdContext";
import { PersonType } from "../../types/PersonType";
import { PlanetType } from "../../types/PlanetType";
import { StarshipType } from "../../types/StarshipType";
import {
  useAllPeople,
  useAllPlanet,
  useAllStarships,
  usePerson,
  usePlanet,
  useStarships,
} from "../../utils/SwapiService";
import Details, { Record } from "../Details";
import ItemList from "../ItemList";
import Spinner from "../Spinner";

export const PeopleList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllPeople();

  const { setId } = useSetIdContext();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<PersonType>
      list={results}
      setId={setId}
      renderTitle={({ name, gender, birth_year }) =>
        `${name} (${gender}), ${birth_year}`
      }
    />
  );
};

export const PlanetList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllPlanet();

  const { setId } = useSetIdContext();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<PlanetType>
      list={results}
      setId={setId}
      renderTitle={({ name }) => `${name}`}
    />
  );
};

export const StarshipList: React.FC = () => {
  const { data: { results = [] } = {}, loading } = useAllStarships();

  const { setId } = useSetIdContext();

  return loading ? (
    <Spinner />
  ) : (
    <ItemList<StarshipType>
      list={results}
      setId={setId}
      renderTitle={({ name }) => `${name}`}
    />
  );
};

export const PeopleDetails: React.FC = () => {
  const { id } = useSetIdContext();

  const { data, loading } = usePerson(id);

  const DetailsComponent = useMemo(
    () =>
      data ? (
        <Details
          title={data.name || ""}
          imgUrl={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`}
        >
          <Record title="Gender" text={data.gender} />
          <Record title="Birth Year" text={data.birth_year} />
          <Record title="Eye Color" text={data.eye_color} />
        </Details>
      ) : null,
    [data]
  );

  return loading ? <Spinner /> : DetailsComponent;
};

export const PlanetDetails: React.FC = () => {
  const { id } = useSetIdContext();

  const { data, loading } = usePlanet(id);

  const DetailsComponent = useMemo(
    () =>
      data ? (
        <Details
          title={data?.name || ""}
          imgUrl={`https://starwars-visualguide.com/assets/img/planets/${data.id}.jpg`}
        >
          <Record title="Diameter" text={data.diameter} />
          <Record title="Orbital Period" text={data.orbital_period} />
        </Details>
      ) : null,
    [data]
  );

  return loading ? <Spinner /> : DetailsComponent;
};

export const StarshipDetails: React.FC = () => {
  const { id } = useSetIdContext();

  const { data, loading } = useStarships(id);

  const DetailsComponent = useMemo(
    () =>
      data ? (
        <Details
          title={data?.name || ""}
          imgUrl={`https://starwars-visualguide.com/assets/img/starships/${data.id}.jpg`}
        >
          <Record title="Model" text={data.model} />
          <Record title="Length" text={data.length} />
          <Record title="Cost" text={data.cost_in_credits} />
        </Details>
      ) : null,
    [data]
  );

  return loading ? <Spinner /> : DetailsComponent;
};
