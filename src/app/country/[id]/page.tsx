import { fetchCountry } from "@/app/api/data";
import MainContainer from "@/app/components/MainContainer";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const countryName = id.replace("_", " ");
    const countryData = await fetchCountry(countryName);
    
    console.log({countryData})

    if (!countryData) {
        return (
            <div>Country not found</div>
        )
    }

    return (
        <MainContainer>
            Country
        </MainContainer>
    )
}