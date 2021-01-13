import { PersonType } from "./PersonType";

export type PersonContextFilterType = {
    person?: PersonType;
    setIdPerson: (id: string) => void;
    loading: boolean;
};