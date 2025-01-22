"use client"

import { useAppContext } from "../context/AppContext";
import useThemeStyles from "../hooks/useThemeStyles";

interface MainContainerProps {
    children: React.ReactNode;
    customStyles?: string;
}

export default function MainContainer ({ children, customStyles }: Readonly<MainContainerProps>) {
    const { mainStyle } = useThemeStyles();

    return (
        <div
            className={`
                min-h-screen
                ${customStyles}
                flex flex-col
                ${mainStyle}
            `}
        >
            <div className="max-w-[1350px] w-full mx-auto">
                {children}
            </div>
        </div>
    )
}