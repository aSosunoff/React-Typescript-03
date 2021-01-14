import { PeopleType } from "../types/PeopleType";
import { PersonType } from "../types/PersonType";
import { PlanetsType } from "../types/PlanetsType";
import { PlanetType } from "../types/PlanetType";
import { StarshipsType } from "../types/StarshipsType";
import { StarshipType } from "../types/StarshipType";

export interface ISwapiService {
    getAllPeople(): Promise<PeopleType>,
    getPerson(id: string): Promise<PersonType>,

    getAllPlanet(): Promise<PlanetsType>,
    getPlanet(id: string): Promise<PlanetType>,

    getAllStarships(): Promise<StarshipsType>,
    getStarship(id: string): Promise<StarshipType>,
}