import { ISwapiService } from "../Interfaces/ISwapiService";
import { PeopleType } from "../types/PeopleType";
import { PersonType } from "../types/PersonType";
import { PlanetsType } from "../types/PlanetsType";
import { PlanetType } from "../types/PlanetType";
import { StarshipsType } from "../types/StarshipsType";
import { StarshipType } from "../types/StarshipType";

import { allPeople, allPlanet, allStarships } from './FakeData.json';

export class FakeSwapiService extends ISwapiService {
    getAllPeople = async (): Promise<PeopleType> => {
        allPeople.results = allPeople.results.map(this.parseId);
        return allPeople as any;
    }

    getPerson = async (id: string): Promise<PersonType> => {
        let data = allPeople.results[id as any];
        return data ? this.parseId(data) : data;
    }

    getAllPlanet = async (): Promise<PlanetsType> => {
        allPlanet.results = allPlanet.results.map(this.parseId);
        return allPeople as any;
    };

    getPlanet = async (id: string): Promise<PlanetType> => {
        let data = allPlanet.results[id as any];
        return data ? this.parseId(data) : data;
    };

    getAllStarships = async (): Promise<StarshipsType> => {
        allStarships.results = allStarships.results.map(this.parseId);
        return allPeople as any;
    };

    getStarship = async (id: string): Promise<StarshipType> => {
        let data = allStarships.results[id as any];
        return data ? this.parseId(data) : data;
    };
}