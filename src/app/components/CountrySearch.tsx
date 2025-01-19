import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function CountrySearch () {
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
            />
        </div>
    )
}