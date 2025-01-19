import { MoonIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header () {
    return (
        <header className="shadow-[0_2px_4px_0px_rgba(0,0,0,0.562)]">
            <nav className="bg-white flex justify-between py-[30px] px-[16px] ">
                <Link href={"/"} >
                    <h1 className="font-extrabold text-[14px] leading-[20px]">
                        Where in the world
                    </h1>
                </Link>
                <div className="flex gap-2">
                    <MoonIcon className="w-[16px] h-[16px]"/>
                    <h2 className="font-semibold text-[12px]">
                        Dark Mode
                    </h2>
                </div>
            </nav>
        </header>
    )
}