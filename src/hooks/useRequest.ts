import { useCallback, useEffect, useMemo, useState } from "react";
import { UseFetchType } from "../types/UseFetchType";

export const useRequest = <T>(callback: () => Promise<T>): UseFetchType<T> => {
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

        callback()
            .then((data) => !canceled && setData(data))
            .catch((error) => !canceled && setError(error.message));

        /* fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Could not fetch ${url}, received ${response.status}`
                    );
                }

                return response.json();
            })
            .then((data) => !canceled && setData(data))
            .catch((error) => !canceled && setError(error.message)); */

        return () => {
            canceled = true;
        };
    }, [callback, initialState, setData, setError]);

    return dataState;
};