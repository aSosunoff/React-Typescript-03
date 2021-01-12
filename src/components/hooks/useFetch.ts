import { useEffect, useState } from "react";

export const useFetch = <T = {}>(url: string): [T, any] => {
    const [body, setBody] = useState<any>();
    const [error, setError] = useState<any>();

    useEffect(() => {
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
            .then((data) => !canceled && setBody(data))
            .catch((error) => !canceled && setError(error.message));

        return () => {
            canceled = true;
        };
    }, [url]);

    return [body, error];
};