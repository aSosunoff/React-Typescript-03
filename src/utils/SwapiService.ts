import { ISwapiService } from "../Interfaces/ISwapiService";
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

export class SwapiService extends ISwapiService {
    getAllPeople = async () => {
        const data = await Fetch(`${API_BASE}/${ApiResource.People}`) as PeopleType;

        if (data.results.length) {
            data.results = data.results.map(this.parseId);
        }

        return data;
    }

    getPerson = async (id: string) => {
        let data = await Fetch(`${API_BASE}/${ApiResource.People}/${id}`) as PersonType;
        return data ? this.parseId(data) : data;
    }

    getAllPlanet = async () => {
        const data = await Fetch(`${API_BASE}/${ApiResource.Planets}`) as PlanetsType;

        if (data.results.length) {
            data.results = data.results.map(this.parseId);
        }

        return data;
    };

    getPlanet = async (id: string) => {
        const data = await Fetch(`${API_BASE}/${ApiResource.Planets}/${id}`) as PlanetType;
        return data ? this.parseId(data) : data;
    };

    getAllStarships = async () => {
        const data = await Fetch(`${API_BASE}/${ApiResource.Starships}`) as StarshipsType;

        if (data.results.length) {
            data.results = data.results.map(this.parseId);
        }

        return data;
    };

    getStarship = async (id: string) => {
        const data = await Fetch(`${API_BASE}/${ApiResource.Starships}/${id}`) as StarshipType;
        return data ? this.parseId(data) : data;
    };
}