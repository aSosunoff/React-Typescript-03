import { useEffect, useMemo, useState } from "react";

type UseFetchType<T> = {
    data: T,
    loading: boolean,
    error: any
};

export const useFetch = <T = {}>(url: string): UseFetchType<T> => {
    const initialState = useMemo<UseFetchType<T>>(() => ({
        data: {} as T,
        error: null,
        loading: true
    }), []);

    const [dataState, setDataState] = useState<UseFetchType<T>>(initialState);

    useEffect(() => {
        setDataState(initialState);

        let canceled = false;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Could not fetch ${url}, received ${response.status}`
                    );
                }

                return response.json();
            })
            .then((data) => !canceled && setDataState(() => ({
                data,
                error: null,
                loading: false,
            })))
            .catch((error) => !canceled && setDataState(() => ({
                error: error.message,
                data: {} as T,
                loading: false,
            })));

        return () => {
            canceled = true;
        };
    }, [initialState, url]);

    return dataState;
};