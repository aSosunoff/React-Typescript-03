import { useCallback } from "react";
import { useSwapiServiceContext } from "../context/SwapiServiceContext";
import { useRequest } from "./useRequest";

export const useAllPeople = () => {
    const { getAllPeople } = useSwapiServiceContext();
    return useRequest(getAllPeople);
};

export const usePerson = (id: string) => {
    const { getPerson } = useSwapiServiceContext();
    const callback = useCallback(() => getPerson(id), [getPerson, id]);
    return useRequest(callback);
};

export const useAllPlanet = () => {
    const { getAllPlanet } = useSwapiServiceContext();
    return useRequest(getAllPlanet);
};

export const usePlanet = (id: string) => {
    const { getPlanet } = useSwapiServiceContext();
    const callback = useCallback(() => getPlanet(id), [getPlanet, id]);
    return useRequest(callback);
};

export const useAllStarships = () => {
    const { getAllStarships } = useSwapiServiceContext();
    return useRequest(getAllStarships);
};

export const useStarships = (id: string) => {
    const { getStarship } = useSwapiServiceContext();
    const callback = useCallback(() => getStarship(id), [getStarship, id]);
    return useRequest(callback);
};