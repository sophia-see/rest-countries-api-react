"use client"
import Image from "next/image";
import { Country as CountryType } from "../api/types"
import React from "react";

interface CountryProps {
    country: CountryType | null | undefined;
}


export default function Country ({country}: CountryProps) {
    const name = country?.name?.common ?? country?.name?.official ?? country?.name?.nativeName ?? ""; 
    const flagUrl = country?.flags?.png ?? country?.flags?.svg ?? "";

    if (!country) {
        return (
            <div>Country not found</div>
        )
    }

    return (
        <div
            className="
                flex flex-col lg:flex-row
            "
        >
            <Image
                src={flagUrl}
                alt={country?.flags?.alt || `flag of ${name}`}
                objectFit="cover"
                layout="responsive"
                width={16}
                height={9}
                className="
                    lg:max-w-[560px]
                    rounded-[10px]
                "
            /> 
        </div>
    )
}