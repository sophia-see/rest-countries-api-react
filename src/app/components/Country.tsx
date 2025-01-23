"use client"
import Image from "next/image";
import { Country as CountryType, Currency, NativeName } from "../api/types"
import React from "react";
import CountryDetail from "./CountryDetails";
import CountryTag from "./CountryTag";

interface CountryProps {
    country: CountryType | null | undefined;
}


export default function Country ({country}: Readonly<CountryProps>) {
    const name = country?.name?.common ?? country?.name?.official ?? "";

    const nativeNames = country?.name?.nativeName;
    const firstNativeName = nativeNames ? Object.entries(nativeNames)?.at(0) : null;
    const nativeName = (firstNativeName?.at(1) as NativeName)?.common;

    const currencies = country?.currencies;
    const firstCurrency = currencies ? Object.entries(currencies)?.at(0) : null;
    const currency = (firstCurrency?.at(1) as Currency)?.name;

    const languages = Object.values(country?.languages as object).join(", ");
    const tlds = country?.tld.join(", ");
    const flagUrl = country?.flags?.svg ?? country?.flags?.png ?? "";

    const borders = country?.borders;

    if (!country) {
        return (
            <div>Country not found</div>
        )
    }

    return (
        <div
            className="
                flex flex-col lg:flex-row gap-[44px] lg:items-center lg:gap-0
            "
        >
            <div
                className="
                    overflow-hidden
                "
            >
                <Image
                    src={flagUrl}
                    alt={country?.flags?.alt || `flag of ${name}`}
                    objectFit="cover"
                    objectPosition="center"
                    layout="responsive"
                    width={16}
                    height={9}
                    className="
                        w-full lg:max-h-[400px] lg:max-w-[560px]
                        rounded-[10px]
                        mx-auto
                        aspect-video
                        object-cover object-center
                    "
                />
            </div>
            <div className="flex flex-col gap-[34px] lg:gap-[68px] lg:pl-10 lg:flex-1 lg:max-w-[574px]">
                {/* details */}
                <div className="flex flex-col gap-[16px]">
                    <div className="font-extrabold text-[22px] lg:text-[32px]">{country?.name?.common}</div>
                    <div className="flex flex-col gap-[32px] xl:flex-row lg:justify-between">
                        <div className="flex flex-col gap-2">
                            <CountryDetail label="Native Name" value={nativeName ?? "N/A"} />
                            <CountryDetail label="Population" value={country?.population ? country?.population.toLocaleString() : "N/A"} />
                            <CountryDetail label="Region" value={country?.region ?? "N/A"} />
                            <CountryDetail label="Sub Region" value={country?.subregion ?? "N/A"} />
                            <CountryDetail label="Capital" value={country?.capital ? country?.capital?.at(0) : "N/A"} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <CountryDetail label="Top Level Domain" value={tlds ?? "N/A"} />
                            <CountryDetail label="Currencies" value={currency ?? "N/A"} />
                            <CountryDetail label="Languages" value={languages ? languages : "N/A"} />
                        </div>
                    </div>
                </div>

                {/* border countries */}
                {borders?.length 
                    ?   <div className="flex flex-col gap-4">
                            <span className="font-semibold text-[16px] leading-[24px]">Border Countries:</span>
                            <div className="flex flex-wrap gap-[10px]">
                                {borders?.map(border => (
                                    <CountryTag text={border} key={border}/>
                                ))}
                            </div>
                        </div> 
                    : null
                }
            </div>
        </div>
    )
}