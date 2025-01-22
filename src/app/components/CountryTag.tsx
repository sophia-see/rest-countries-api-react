import Link from "next/link";
import useThemeStyles from "../hooks/useThemeStyles";

export default function CountryTag ({text}: {text: string}) {
    const { cardStyle } = useThemeStyles();

    return (
        <Link
            className={`
                ${cardStyle}
                py-[6px] px-3
                flex justify-center
                min-w-[96px]
                shadow-[0px_0px_4px_1px_rgba(0,0,0,0.1049)]
                rounded-[2px]
            `}
            href={`/country/${text.toLowerCase()}`}
        >
            <div className="font-light text-[12px] lg:text-[14px]">{text}</div>
        </Link>
    )
}