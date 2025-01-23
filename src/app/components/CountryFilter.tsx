"use client"

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { toTitleCase } from '../utils';
import { useAppContext } from '../context/AppContext';
import useThemeStyles from '../hooks/useThemeStyles';

interface CountryFilterProps {
    regions: string[];
}

export default function CountryFilter({ regions }: Readonly<CountryFilterProps>) {
    const { isDarkMode } = useAppContext();
    const { cardStyle } = useThemeStyles();
    const searchParams = useSearchParams();
    const regionFilter = searchParams?.get("region");
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSelectRegion = (region: string) => {
        const params = new URLSearchParams(searchParams);

        params.delete('country');
        params.set('region', region.toLowerCase());

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <Menu as="div" className={`relative inline-block w-auto text-left my-[40px] lg:my-0`}>
            <div>
                <MenuButton 
                    className={`
                        inline-flex justify-center gap-x-1.5 
                        rounded-md 
                        ${cardStyle}
                        px-[24px] py-[14px] 
                        text-[12px] lg:text-[14px] font-semibold 
                        shadow-[0px_2px_9px_0px_rgba(0,0,0,0.0532)]
                    `}
                >
                    {regionFilter ? `Region: ${toTitleCase(regionFilter)}` : "Filter by Region"}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className={`
                    absolute left-0 lg:right-0 z-10
                    mt-2 w-[170px] origin-top-right 
                    rounded-md 
                    ${cardStyle}
                    shadow-[0px_2px_9px_0px_rgba(0,0,0,0.0532)] ring-1 ring-black/5 
                    transition 
                    focus:outline-none 
                    data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
                    data-[enter]:duration-100 data-[enter]:ease-out 
                    data-[leave]:duration-75 data-[leave]:ease-in
                `}
            >
                <div className="py-1">
                    {regions.map((region: string) => {
                        return (
                            <MenuItem key={region}>
                                <div
                                    onClick={() => handleSelectRegion(region)}
                                    className={`
                                        block px-4 py-2 text-[12px] lg:text-[14px]
                                        ${isDarkMode ? "data-[focus]:text-gray-100 data-[focus]:bg-gray-900" : "data-[focus]:bg-gray-100 data-[focus]:text-gray-900 "}
                                        data-[focus]:outline-none 
                                        cursor-pointer
                                    `}
                                >
                                    {region}
                                </div>
                            </MenuItem>
                        )
                    })}
                </div>
            </MenuItems>
        </Menu>
    )
}
