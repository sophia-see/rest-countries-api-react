"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

interface CountrySearchProps {
    country: string | undefined;
}
export default function CountrySearch ({country} : CountrySearchProps) {
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
            className="
                w-full 
                py-[16px] px-[32px]
                bg-white rounded-[5px] shadow-sm
                flex gap-[26px] items-center
            "
        >
            <MagnifyingGlassIcon className="stroke-[#B2B2B2] w-[16px] h-[16px]"/>
            <input 
                type="text" 
                className="w-full outline-none"
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