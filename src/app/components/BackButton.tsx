"use client"

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import useThemeStyles from "../hooks/useThemeStyles";

export default function BackButton () {
    const { cardStyle } = useThemeStyles();

    return (
        <div
            className={`
                ${cardStyle}
                flex gap-2 items-center
                w-fit
                py-[7px] px-[24px]
                rounded-[2px]
                shadow-[0px_0px_7px_0px_rgba(0,0,0,0.2931)]
            `}
        >
            <ArrowLeftIcon width={16} height={16}/>
            <div className="font-light text-[14px] leading-[20px]">Back</div>
        </div>
    )
}