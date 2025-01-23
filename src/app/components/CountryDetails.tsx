import { JSX } from "react";

interface CountryDetailsProps {
    label: string;
    value?: string;
    isHomePage?: boolean;
}

export default function CountryDetail ({label, value, isHomePage = false}: Readonly<CountryDetailsProps>): JSX.Element {
    return (
        <div className={`font-light text-[14px] leading-[16px] ${isHomePage ? "" : "lg:text-[16px] lg:leading-[32px]"}`}>
            <span className='font-semibold'>{label}:{" "}</span>{value}
        </div>
    )
}