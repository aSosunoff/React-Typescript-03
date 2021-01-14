import { useCallback, useMemo } from "react";
import { useFetch } from "./useFetch";
import { SwapiService_2 } from "../utils/Service";

export const useAllPeople = () => {
    const getAllPeople = useMemo(() => SwapiService_2.getAllPeople, []);
    return useFetch(getAllPeople);
};

export const usePerson = (id: string) => {
    const getPerson = useCallback(() => SwapiService_2.getPerson(id), [id]);
    return useFetch(getPerson);
};

export const useAllPlanet = () => {
    const getAllPlanet = useMemo(() => SwapiService_2.getAllPlanet, []);
    return useFetch(getAllPlanet);
};

export const usePlanet = (id: string) => {
    const getPlanet = useCallback(() => SwapiService_2.getPlanet(id), [id]);
    return useFetch(getPlanet);
};

export const useAllStarships = () => {
    const getAllStarships = useMemo(() => SwapiService_2.getAllStarships, []);
    return useFetch(getAllStarships);
};

export const useStarships = (id: string) => {
    const getStarship = useCallback(() => SwapiService_2.getStarship(id), [id]);
    return useFetch(getStarship);
};