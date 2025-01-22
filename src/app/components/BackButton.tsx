"use client"

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import useThemeStyles from "../hooks/useThemeStyles";
import { useRouter } from 'next/navigation';
import React from "react";


export default function BackButton () {
    const { cardStyle } = useThemeStyles();
    const router = useRouter();

    const handleBack = () => {
        // Ensure the router is defined before calling 'back'
        if (router) {
            router.back();
        } else {
            console.error("Router is not available.");
        }
    };

    return (
        <button
            className={`
                ${cardStyle}
                flex gap-2 items-center
                w-fit
                py-[7px] px-[24px]
                rounded-[2px]
                shadow-[0px_0px_7px_0px_rgba(0,0,0,0.2931)]
            `}
            onClick={handleBack}
        >
            <ArrowLeftIcon width={16} height={16}/>
            <div className="font-light text-[14px] leading-[20px] lg:text-[16px]">Back</div>
        </button>
    )
}