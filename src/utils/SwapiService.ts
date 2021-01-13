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

const getIdFromUrl = (url: string) => {
    const match = url.match(/\/(?<ID>[0-9]+)\/$/);
    return match?.groups?.ID || '0';
};

export const useAllPeople = () => {
    const dataState = useFetch<PeopleType>(`${API_BASE}/${ApiResource.People}/`)

    const people = dataState.data?.results.map((people) => ({ ...people, id: getIdFromUrl(people.url) }));

    return {
        ...dataState,
        data: {
            ...dataState.data,
            results: people
        }
    }
};

export const usePerson = (id: string) => {
    const dataState = useFetch<PersonType>(`${API_BASE}/${ApiResource.People}/${id}`);

    if (dataState?.data) {
        dataState.data.id = getIdFromUrl(dataState?.data?.url || '');
    }

    return dataState
};

export const useAllPlanet = () =>
    useFetch<PlanetsType>(`${API_BASE}/${ApiResource.Planets}/`);

export const usePlanet = (id: number) =>
    useFetch<PlanetType>(`${API_BASE}/${ApiResource.Planets}/${id}`);

export const useAllStarships = () =>
    useFetch<StarshipsType>(`${API_BASE}/${ApiResource.Starships}/`);

export const useStarships = (id: number) =>
    useFetch<StarshipType>(`${API_BASE}/${ApiResource.Starships}/${id}`);