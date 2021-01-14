import { useCallback, useMemo } from "react";
import { useRequest } from "./useRequest";
import { Service } from "../utils/SwapiService";

export const useAllPeople = () => {
    const getAllPeople = useMemo(() => Service.getAllPeople, []);
    return useRequest(getAllPeople);
};

export const usePerson = (id: string) => {
    const getPerson = useCallback(() => Service.getPerson(id), [id]);
    return useRequest(getPerson);
};

export const useAllPlanet = () => {
    const getAllPlanet = useMemo(() => Service.getAllPlanet, []);
    return useRequest(getAllPlanet);
};

export const usePlanet = (id: string) => {
    const getPlanet = useCallback(() => Service.getPlanet(id), [id]);
    return useRequest(getPlanet);
};

export const useAllStarships = () => {
    const getAllStarships = useMemo(() => Service.getAllStarships, []);
    return useRequest(getAllStarships);
};

export const useStarships = (id: string) => {
    const getStarship = useCallback(() => Service.getStarship(id), [id]);
    return useRequest(getStarship);
};