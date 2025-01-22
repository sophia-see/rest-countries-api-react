"use client"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import useThemeStyles from "../hooks/useThemeStyles";

export default function Header () {
    const { isDarkMode, setIsDarkMode } = useAppContext();
    const { cardStyle } = useThemeStyles();
    const onToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <header className="shadow-[0_2px_4px_0px_rgba(0,0,0,0.562)]">
            <nav 
                className={`
                    flex justify-between py-[30px] px-[16px]
                    ${cardStyle}
                `}
            >
                <Link href={"/"} >
                    <h1 className="font-extrabold text-[14px] leading-[20px]">
                        Where in the world
                    </h1>
                </Link>
                <div className="flex gap-2 cursor-pointer" onClick={onToggleDarkMode}>
                    {isDarkMode 
                        ? <SunIcon  className="w-[16px] h-[16px]"/>
                        : <MoonIcon className="w-[16px] h-[16px]"/>
                    }
                    <h2 className="font-semibold text-[12px]">
                        {isDarkMode ? "Light" : "Dark"} Mode
                    </h2>
                </div>
            </nav>
        </header>
    )
}