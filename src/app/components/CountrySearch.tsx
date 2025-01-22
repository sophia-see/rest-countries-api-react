"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppContext } from "../context/AppContext";
import useThemeStyles from "../hooks/useThemeStyles";

interface CountrySearchProps {
    country: string | undefined;
}
export default function CountrySearch ({country} : CountrySearchProps) {
    const { isDarkMode } = useAppContext();
    const { cardStyle } = useThemeStyles();
    const searchParams = useSearchParams();
    const countrySearch = searchParams.get("country")
    const pathname = usePathname();
    const { replace } = useRouter();
    const [countryVal, setCountryVal] = React.useState(countrySearch ? countrySearch : "");

    const handleSearchCountry = useDebouncedCallback((country: string) => {
        const params = new URLSearchParams(searchParams);

        params.delete('region');
        params.set('country', country.toLowerCase());

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    React.useEffect(() => {
        if (!countrySearch) setCountryVal("");
    }, [countrySearch])
    
    return (
        <div
            className={`
                w-full lg:max-w-[480px]
                py-[16px] px-[32px]
                ${cardStyle}
                rounded-[5px] shadow-[0px_2px_9px_0px_rgba(0,0,0,0.0532)]
                flex gap-[26px] items-center
            `}
        >
            <MagnifyingGlassIcon className={`${isDarkMode ? "stroke-[#FFFFFF]" : "stroke-[#B2B2B2]"} w-[16px] h-[16px]`}/>
            <input 
                type="text" 
                className={`w-full outline-none ${cardStyle}`}
                placeholder="Search for a country…"
                value={countryVal ?? ""}
                onChange={(e) => {
                    const val = e.target.value;

                    setCountryVal(val)
                    handleSearchCountry(val);
                }}
            />
        </div>
    )
}