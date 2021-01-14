import { PeopleType } from "../types/PeopleType";
import { PersonType } from "../types/PersonType";
import { PlanetsType } from "../types/PlanetsType";
import { PlanetType } from "../types/PlanetType";
import { StarshipsType } from "../types/StarshipsType";
import { StarshipType } from "../types/StarshipType";
import { Fetch } from "./Fetch";

enum ApiResource {
    People = 'people',
    Planets = 'planets',
    Starships = 'starships',
}

const API_BASE = 'https://swapi.dev/api';

interface ISwapiService {
    getAllPeople(): Promise<PeopleType>,
    getPerson(id: string): Promise<PersonType>,

    getAllPlanet(): Promise<PlanetsType>,
    getPlanet(id: string): Promise<PlanetType>,

    getAllStarships(): Promise<StarshipsType>,
    getStarship(id: string): Promise<StarshipType>,
}

class SwapiService implements ISwapiService {
    static getIdFromUrl(url: string) {
        const match = url.match(/\/(?<ID>[0-9]+)\/$/);
        return match?.groups?.ID || '0';
    };

    static parseId<T extends { url: string }>(item: T) {
        return ({ ...item, id: SwapiService.getIdFromUrl(item.url) })
    }

    async getAllPeople() {
        const data = await Fetch(`${API_BASE}/${ApiResource.People}`) as PeopleType;

        if (data.results.length) {
            data.results = data.results.map(SwapiService.parseId);
        }

        return data;
    }

    async getPerson(id: string) {
        let data = await Fetch(`${API_BASE}/${ApiResource.People}/${id}`) as PersonType;
        return data ? SwapiService.parseId(data) : data;
    }

    async getAllPlanet() {
        const data = await Fetch(`${API_BASE}/${ApiResource.Planets}`) as PlanetsType;

        if (data.results.length) {
            data.results = data.results.map(SwapiService.parseId);
        }

        return data;
    };

    async getPlanet(id: string) {
        const data = await Fetch(`${API_BASE}/${ApiResource.Planets}/${id}`) as PlanetType;
        return data ? SwapiService.parseId(data) : data;
    };

    async getAllStarships() {
        const data = await Fetch(`${API_BASE}/${ApiResource.Starships}`) as StarshipsType;

        if (data.results.length) {
            data.results = data.results.map(SwapiService.parseId);
        }

        return data;
    };

    async getStarship(id: string) {
        const data = await Fetch(`${API_BASE}/${ApiResource.Starships}/${id}`) as StarshipType;
        return data ? SwapiService.parseId(data) : data;
    };
}

export const Service = new SwapiService();