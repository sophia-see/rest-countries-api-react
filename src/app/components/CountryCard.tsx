"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { JSX } from 'react';
import { fetchCountries } from '../api/data';
import { Country } from '../api/types';
import { useAppContext } from '../context/AppContext';

function CountryDetail ({label, value}: {label: string, value?: string}): JSX.Element {
    return (
        <div className='font-light text-[14px] leading-[16px]'>
            <span className='font-semibold'>{label}:{" "}</span>{value}
        </div>
    )
}

interface CountryProps {
    country?: Country;
    index?: number;
    isLoading?: boolean;
}

export default function CountryCard ({country, index, isLoading = false}: CountryProps) {
    const { isDarkMode } = useAppContext();
    const linkName = country?.name.common.toLowerCase().replace(" ", "_");

    const imageSkeleton = (
        <div
            className={`
                w-[264px] h-[160px]
                ${isDarkMode ? "bg-gray-600" : "bg-gray-300" }
                rounded-md 
                animate-pulse
            `}
        ></div>
    );

    const detailsSkeleton = (
        <div
            className={`
                w-full h-[128px]
                ${isDarkMode ? "bg-gray-600" : "bg-gray-300" }
                rounded-md 
                animate-pulse
            `}
        ></div>
    );

    return (
        <Link
            className={`
                flex flex-col gap-0
                ${isDarkMode ? "text-dark-foreground bg-dark-background" : "text-light-foreground bg-light-background"}
                h-[336px] max-sm:max-w-full max-w-[264px] w-[264px]
                rounded-[5px]
                overflow-hidden
                ${isLoading ? "pointer-events-none" : ""}
            `}
            key={index}
            
            href={`/country/${linkName}`}
        >
            {isLoading 
                ? imageSkeleton
                : <Image 
                    className="
                        w-full h-[160px]
                        object-cover object-center
                    "
                    src={country?.flags.png ?? ""} 
                    alt={`flag of ${country?.name.common}`}
                    width={264}
                    height={160}
                />
            }
            
            <div
                className='
                    p-[24px]
                    flex flex-col gap-4
                '
            >
                {isLoading 
                    ? detailsSkeleton
                    :   <>
                            <h3 className='font-extrabold text-[18px] leading-[26px]'>{country?.name.common}</h3>
                            <div
                                className='
                                    flex flex-col gap-2
                                '
                            >
                                <CountryDetail label='Population' value={country?.population.toLocaleString()} />
                                <CountryDetail label='Region' value={country?.region} />
                                <CountryDetail label='Capital' value={country?.capital[0]} />
                            </div>                    
                        </>
                }
            </div>
        </Link>
    )
}