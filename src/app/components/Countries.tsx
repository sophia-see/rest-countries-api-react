"use client";

import React from 'react';
import { fetchCountries } from '../api/data';
import { Country } from '../api/types';
import CountryCard from './CountryCard';

interface CountriesProps {
    region: string | undefined;
    country: string | undefined;
}
function CountriesContainer({ children }: { children: React.ReactNode }) {
    return (
        <section
            className="
                flex flex-col gap-10 justify-items-center m-auto
                md:grid md:grid-cols-[repeat(auto-fill,_minmax(auto,264px))]
                max-w-full
                px-4
            "
        >
            {children}
        </section>
    );
}

export default function Countries({ region, country }: CountriesProps) {
    const [countries, setCountries] = React.useState<Country[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const data = await fetchCountries(region ?? country, region ? "region" : "name");
                setCountries(data);
            } catch (error) {
                console.error("Error fetching countries:", error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false); // Delay hiding skeleton
                }, 100); // Add fade-out delay
            }
        };

        fetchData();
    }, [region, country]);

    if (isLoading) {
        return (
            <CountriesContainer>
                {[...Array(4)].map((u, i) => {
                    return <CountryCard index={i} isLoading={true} key={i} />;
                })}
            </CountriesContainer>
        );
    }

    if (countries.length === 0) {
        return <div>Nothing found</div>;
    }

    return (
        <CountriesContainer>
            {countries.map((country: Country, index: number) => {
                return (
                    <CountryCard country={country} index={index} key={index}/>
                );
            })}
        </CountriesContainer>
    );
}
