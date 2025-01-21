"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { JSX } from 'react';
import { fetchCountries } from '../api/data';
import { Country } from '../api/types';
import CountryCard from './CountryCard';

interface CountriesProps {
    region: string | undefined;
    country: string | undefined;
}



export default function Countries ({region, country}: CountriesProps) {
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
                }, 250); // Add fade-out delay
            }
        };
    
        fetchData();
    }, [region, country]);

    if (isLoading) {
        return (
            <section 
                className="
                    flex flex-col gap-10
                    m-auto
                "
            >
                
                {[...Array(5)].map((u, i) => {
                    return <CountryCard index={i} isLoading={true} key={i}/>
                })}
            </section>
        )
    }

    if (countries.length == 0) {
        return (
            <div>Nothing found</div>
        )
    }

    return (
        <section 
            className="
                flex flex-col gap-10
                m-auto
            "
        >
            
            {countries.map((country: Country, index: number) => {
                return <CountryCard country={country} index={index} key={index}/>
            })}
        </section>
    )
}