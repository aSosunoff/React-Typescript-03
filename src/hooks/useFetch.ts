import { useCallback, useEffect, useMemo, useState } from "react";

type UseFetchType<T> = {
    data?: T,
    loading: boolean,
    error: any
};

export const useFetch = <T = {}>(url: string): UseFetchType<T> => {
    const initialState = useMemo<UseFetchType<T>>(() => ({
        data: undefined,
        error: null,
        loading: true
    }), []);

    const [dataState, setDataState] = useState<UseFetchType<T>>(initialState);

    const setData = useCallback((data) => setDataState(() => ({
        data,
        error: null,
        loading: false,
    })), []);

    const setError = useCallback((error) => setDataState(() => ({
        error,
        data: undefined,
        loading: false,
    })), []);

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
            .then((data) => !canceled && setData(data))
            .catch((error) => !canceled && setError(error.message));

        return () => {
            canceled = true;
        };
    }, [initialState, setData, setError, url]);

    return dataState;
};