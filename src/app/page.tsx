import { fetchRegions } from "./api/data";
import Countries from "./components/Countries";
import CountryFilter from "./components/CountryFilter";
import CountrySearch from "./components/CountrySearch";
import HomeContainer from "./components/HomeContainer";

interface HomeProps {
  searchParams?: Promise<{
    region?: string;
    country?: string;
  }>;
}
export default async function Home(props: HomeProps) {
  const searchParams = await props.searchParams;
  const regions = await fetchRegions();

  return (
    <HomeContainer>
      <div className="h-full flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mx-[80px] lg:mb-[48px]">
        <CountrySearch country={searchParams?.country}/>
        <CountryFilter regions={regions}/>        
      </div>

      <Countries region={searchParams?.region} country={searchParams?.country}/>
    </HomeContainer>
  );
}
