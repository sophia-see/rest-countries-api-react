import { NextResponse } from "next/server";

export async function fetchRegions() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=region');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const uniqueArray = data.reduce((accumulator: string[], currentValue: any) => {
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

export async function fetchCountries(region?: string) {
    // https://restcountries.com/v3.1/region/europe?fields=name,population,flags,region,capital
    const baseUrl = "https://restcountries.com/v3.1/";
    const fields = "?fields=name,population,flags,region,capital"
    const finalUrl = `${baseUrl}${region ? "region/europe" : "all"}${fields}`

    try {
        const response = await fetch(finalUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        return data;

    } catch (error) {
        console.error('Error fetching countries:', error);
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
        
        return data;

    } catch (error) {
        console.error('Error fetching country:', error);
    }
}