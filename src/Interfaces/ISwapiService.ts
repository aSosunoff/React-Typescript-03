import { PeopleType } from "../types/PeopleType";
import { PersonType } from "../types/PersonType";
import { PlanetsType } from "../types/PlanetsType";
import { PlanetType } from "../types/PlanetType";
import { StarshipsType } from "../types/StarshipsType";
import { StarshipType } from "../types/StarshipType";

export abstract class ISwapiService {
    abstract getAllPeople(): Promise<PeopleType>;
    abstract getPerson(id: string): Promise<PersonType>;

    abstract getAllPlanet(): Promise<PlanetsType>;
    abstract getPlanet(id: string): Promise<PlanetType>;

    abstract getAllStarships(): Promise<StarshipsType>;
    abstract getStarship(id: string): Promise<StarshipType>;

    getIdFromUrl = (url: string) => {
        const match = url.match(/\/(?<ID>[0-9]+)\/$/);
        return match?.groups?.ID || '0';
    };

    parseId = <T extends { url: string }>(item: T) => {
        return ({ ...item, id: this.getIdFromUrl(item.url) })
    }
}