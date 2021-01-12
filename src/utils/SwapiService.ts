import { useFetch } from "../hooks/useFetch";

const API_BASE = 'https://swapi.dev/api';

enum ApiResource {
    People = 'people',
    Planets = 'planets',
    Starships = 'starships',
}

type PagesType<T> = {
    count: number,
    next: string
    previous: string
    results: T[]
}

type PeopleType = PagesType<PersonType>;

type PersonType = {
    birth_year: string,
    created: string,
    edited: string,
    eye_color: string,
    films: string[],
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    species: string[],
    starships: string[],
    url: string,
    vehicles: string[],
};

type PlanetsType = PagesType<PlanetType>;

type PlanetType = {
    climate: string,
    created: string,
    diameter: string,
    edited: string,
    films: string[],
    gravity: string,
    name: string,
    orbital_period: string,
    population: string,
    residents: string[],
    rotation_period: string,
    surface_water: string,
    terrain: string,
    url: string,
}

type StarshipsType = PagesType<StarshipType>;

type StarshipType = {
    MGLT: string,
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    films: string[],
    hyperdrive_rating: string,
    length: string,
    manufacturer: string,
    max_atmosphering_speed: string,
    model: string,
    name: string,
    passengers: string,
    pilots: string[],
    starship_class: string,
    url: string,
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