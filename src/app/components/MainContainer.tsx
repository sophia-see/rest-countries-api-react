"use client"

import { useAppContext } from "../context/AppContext";

interface MainContainerProps {
    children: React.ReactNode;
    customStyles?: string;
}

export default function MainContainer ({ children, customStyles }: Readonly<MainContainerProps>) {
    const {isDarkMode } = useAppContext();

    return (
        <div
            className={`
                min-h-screen
                ${customStyles}
                flex flex-col
                ${isDarkMode ? "text-main-dark-foreground bg-main-dark-background" : "text-main-light-foreground bg-main-light-background"}
            `}
        >
            <div className="max-w-[1350px] w-full mx-auto">
                {children}
            </div>
        </div>
    )
}