import { fetchCountry } from "@/app/api/data";
import BackButton from "@/app/components/BackButton";
import Country from "@/app/components/Country";
import MainContainer from "@/app/components/MainContainer";

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function Page(props: Readonly<PageProps>) {
    const params = await props.params;
    const id = params.id;
    const countryName = id.replace("_", " ");
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