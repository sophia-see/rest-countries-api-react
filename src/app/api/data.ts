import { Country } from "./types";

export async function fetchRegions() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=region');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const uniqueArray = data.reduce((accumulator: string[], currentValue: Country) => {
            if (!accumulator.includes(currentValue.region)) {
                accumulator.push(currentValue.region);
            }
            return accumulator;
        }, []);
        
        return uniqueArray;

    } catch (error) {
        console.error('Error fetching regions:', error);
    }
}

export async function fetchCountries(value?: string, type?: string) {
    // https://restcountries.com/v3.1/region/europe?fields=name,population,flags,region,capital
    const baseUrl = "https://restcountries.com/v3.1/";
    const fields = "?fields=name,population,flags,region,capital";
    const finalUrl = `${baseUrl}${value ? `${type}/${value}` : "all"}${fields}`
    try {
        const response = await fetch(finalUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        return data;

    } catch (error) {
        console.log({error})
        return [];
    }
}

export async function fetchCountry(name: string) {
    // https://restcountries.com/v3.1/region/europe?fields=name,population,flags,region,capital
    const baseUrl = `https://restcountries.com/v3.1/name/${name}`;
    const fields = "?fields=name,population,flags,region,subregion,capital,tld,currencies,languages,borders";
    const finalUrl = `${baseUrl}${fields}`;
    try {
        const response = await fetch(finalUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const borders = data?.at(0)?.borders;
        let bordersName: string[] = [];

        if (borders && borders.length > 0) {
            try {
                bordersName = await Promise.all(
                    borders.map(async (border: string) => {
                        const url = `https://restcountries.com/v3.1/alpha/${border}`;
                        const borderFields = "?fields=name";
                        const finalUrl = `${url}${borderFields}`;
                        const response = await fetch(finalUrl);

                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }

                        const borderData = await response.json();

                        return borderData?.name?.common || ""; // Extract the common name or return an empty string
                    })
                );
            } catch (error) {
                console.log("Error fetching border data:", error);
            }
        }

        data[0].borders = bordersName;


        
        return data;

    } catch (error) {
        console.log({error})
        return null;
    }
}