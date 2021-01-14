export const Fetch = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            `Could not fetch ${url}, received ${response.status}`
        );
    }

    return await response.json();
}