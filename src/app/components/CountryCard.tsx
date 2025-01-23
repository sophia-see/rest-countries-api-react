"use client";

import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { Country } from '../api/types';
import { useAppContext } from '../context/AppContext';
import useThemeStyles from '../hooks/useThemeStyles';
import CountryDetail from './CountryDetails';

interface CountryProps {
    country?: Country;
    index?: number;
    isLoading?: boolean;
}

export default function CountryCard ({country, index, isLoading = false}: Readonly<CountryProps>) {
    const { isDarkMode } = useAppContext();
    const { cardStyle } = useThemeStyles();
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
                mx-auto
                flex flex-col gap-0
                ${cardStyle}
                h-[336px] max-sm:max-w-full max-w-[264px] w-[264px]
                rounded-[5px]
                overflow-hidden
                ${isLoading ? "pointer-events-none" : ""}
                shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294)]
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
                    src={country?.flags.svg ?? country?.flags.png ?? ""} 
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
                                <CountryDetail isHomePage={true} label='Population' value={country?.population.toLocaleString()} />
                                <CountryDetail isHomePage={true} label='Region' value={country?.region} />
                                <CountryDetail isHomePage={true} label='Capital' value={country?.capital[0]} />
                            </div>                    
                        </>
                }
            </div>
        </Link>
    )
}