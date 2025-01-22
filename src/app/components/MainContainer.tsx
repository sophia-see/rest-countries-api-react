"use client"

import useThemeStyles from "../hooks/useThemeStyles";

interface MainContainerProps {
    children: React.ReactNode;
    mainCustomStyles?: string;
    parentCustomStyles?: string;
}

export default function MainContainer ({ children, mainCustomStyles, parentCustomStyles }: Readonly<MainContainerProps>) {
    const { mainStyle } = useThemeStyles();

    return (
        <div
            className={`
                min-h-screen
                ${mainCustomStyles}
                flex flex-col
                ${mainStyle}
            `}
        >
            <div className={`max-w-[1350px] w-full mx-auto ${parentCustomStyles}`}>
                {children}
            </div>
        </div>
    )
}