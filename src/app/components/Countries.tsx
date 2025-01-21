"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { JSX } from 'react';
import { fetchCountries } from '../api/data';
import { Country } from '../api/types';

interface CountriesProps {
    region: string | undefined;
    country: string | undefined;
}

function CountryDetail ({label, value}: {label: string, value: string}): JSX.Element {
    return (
        <div className='font-light text-[14px] leading-[16px]'>
            <span className='font-semibold'>{label}:{" "}</span>{value}
        </div>
    )
}

export default function Countries ({region, country}: CountriesProps) {
    const [countries, setCountries] = React.useState<Country[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
        
            try {
                const data = await fetchCountries(region || country, region ? "region" : "name");
                setCountries(data);
            } catch (error) {
                console.error("Error fetching countries:", error);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, [region, country]);

    if (isLoading) {
        return (
            <div>Loading...</div>
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
                const linkName = country.name.common.toLowerCase().replace(" ", "_");
                return (
                    <Link
                        className="
                            flex flex-col gap-0
                            bg-white
                            max-w-[264px] h-[336px]
                            rounded-[5px]
                            overflow-hidden
                        "
                        key={index}
                        href={`/country/${linkName}`}
                    >
                        <Image 
                            className="
                                w-full h-[160px]
                                object-cover object-center
                            "
                            src={country.flags.png} 
                            alt={`flag of ${country.name.common}`}
                            width={264}
                            height={160}
                        />
                        <div
                            className='
                                p-[24px]
                                flex flex-col gap-4
                            '
                        >
                            <h3 className='font-extrabold text-[18px] leading-[26px]'>{country.name.common}</h3>
                            <div
                                className='
                                    flex flex-col gap-2
                                '
                            >
                                <CountryDetail label='Population' value={country.population.toLocaleString()} />
                                <CountryDetail label='Region' value={country.region} />
                                <CountryDetail label='Capital' value={country.capital[0]} />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </section>
    )
}