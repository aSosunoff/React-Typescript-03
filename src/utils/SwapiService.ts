import { useFetch } from "../hooks/useFetch";
import { PeopleType } from "../types/PeopleType";
import { PersonType } from "../types/PersonType";
import { PlanetsType } from "../types/PlanetsType";
import { PlanetType } from "../types/PlanetType";
import { StarshipsType } from "../types/StarshipsType";
import { StarshipType } from "../types/StarshipType";

const API_BASE = 'https://swapi.dev/api';

enum ApiResource {
    People = 'people',
    Planets = 'planets',
    Starships = 'starships',
}

export const useAllPeople = () =>
    useFetch<PeopleType>(`${API_BASE}/${ApiResource.People}/`);

export const usePerson = (id: number) =>
    useFetch<PersonType>(`${API_BASE}/${ApiResource.People}/${id}`);

export const useAllPlanet = () =>
    useFetch<PlanetsType>(`${API_BASE}/${ApiResource.Planets}/`);

export const usePlanet = (id: number) =>
    useFetch<PlanetType>(`${API_BASE}/${ApiResource.Planets}/${id}`);

export const useAllStarships = () =>
    useFetch<StarshipsType>(`${API_BASE}/${ApiResource.Starships}/`);

export const useStarships = (id: number) =>
    useFetch<StarshipType>(`${API_BASE}/${ApiResource.Starships}/${id}`);