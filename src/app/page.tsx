import { fetchRegions } from "./api/data";
import Countries from "./components/Countries";
import CountryFilter from "./components/CountryFilter";
import CountrySearch from "./components/CountrySearch";
import MainContainer from "./components/MainContainer";

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
    <MainContainer customStyles="py-[24px] px-[16px] md:py-[48px]">
      <div 
        className="
          h-full 
          flex flex-col lg:flex-row lg:justify-between lg:items-center 
          lg:px-8 lg:mb-[48px]
        "
      >
        <CountrySearch country={searchParams?.country}/>
        <CountryFilter regions={regions}/>        
      </div>
      <Countries region={searchParams?.region} country={searchParams?.country}/>
    </MainContainer>
  );
}
