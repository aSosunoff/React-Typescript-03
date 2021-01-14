import { useCallback, useMemo } from "react";
import { useRequest } from "./useRequest";
import { SwapiService_2 } from "../utils/Service";

export const useAllPeople = () => {
    const getAllPeople = useMemo(() => SwapiService_2.getAllPeople, []);
    return useRequest(getAllPeople);
};

export const usePerson = (id: string) => {
    const getPerson = useCallback(() => SwapiService_2.getPerson(id), [id]);
    return useRequest(getPerson);
};

export const useAllPlanet = () => {
    const getAllPlanet = useMemo(() => SwapiService_2.getAllPlanet, []);
    return useRequest(getAllPlanet);
};

export const usePlanet = (id: string) => {
    const getPlanet = useCallback(() => SwapiService_2.getPlanet(id), [id]);
    return useRequest(getPlanet);
};

export const useAllStarships = () => {
    const getAllStarships = useMemo(() => SwapiService_2.getAllStarships, []);
    return useRequest(getAllStarships);
};

export const useStarships = (id: string) => {
    const getStarship = useCallback(() => SwapiService_2.getStarship(id), [id]);
    return useRequest(getStarship);
};