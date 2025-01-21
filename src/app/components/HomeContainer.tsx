"use client"

import { useAppContext } from "../context/AppContext";

export default function HomeContainer ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const {isDarkMode } = useAppContext();

    return (
        <div
            className={`
                py-[24px] px-[16px]
                flex flex-col 
                ${isDarkMode ? "text-main-dark-foreground bg-main-dark-background" : "text-main-light-foreground bg-main-light-background"}
            `}
        >
            {children}
        </div>
    )
}