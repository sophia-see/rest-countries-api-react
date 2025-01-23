import { fetchCountry } from "@/app/api/data";
import BackButton from "@/app/components/BackButton";
import Country from "@/app/components/Country";
import MainContainer from "@/app/components/MainContainer";
import { toSentenceCase } from "@/app/utils";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
    const id = params.id;
    const countryName = decodeURI(id);

    return {
        title: `${toSentenceCase(countryName)}`,
        description: `View data about ${countryName}`,
    };
}

export default async function Page(props: Readonly<PageProps>) {
    const params = await props.params;
    const id = params.id;
    const countryName = decodeURI(id);
    const countryData = await fetchCountry(countryName);

    if (!countryData || countryData.length == 0) {
        return (
            <div>Country not found</div>
        )
    }

    return (
        <MainContainer 
            mainCustomStyles="py-[40px] px-[28px] md:p-[80px]"
            parentCustomStyles="flex flex-col gap-[64px]"    
        >
            <BackButton />
            <Country country={countryData?.at(0)} />
        </MainContainer>
    )
}