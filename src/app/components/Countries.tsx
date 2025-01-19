import Image from 'next/image'
import { JSX } from 'react';

interface CountriesProps {
    countries: any[];
}

function CountryDetail ({label, value}: {label: string, value: string}): JSX.Element {
    return (
        <div className='font-light text-[14px] leading-[16px]'>
            <span className='font-semibold'>{label}:{" "}</span>{value}
        </div>
    )
}

export default function Countries ({ countries }: CountriesProps) {
    return (
        <section 
            className="
                flex flex-col gap-10
                m-auto
            "
        >
            {countries.map((country, index) => {
                return (
                    <div
                        className="
                            flex flex-col gap-0
                            bg-white
                            max-w-[264px] h-[336px]
                            rounded-[5px]
                            overflow-hidden
                        "
                        key={index}
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
                    </div>
                )
            })}
        </section>
    )
}