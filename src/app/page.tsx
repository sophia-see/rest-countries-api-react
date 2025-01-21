import { fetchRegions } from "./api/data";
import Countries from "./components/Countries";
import CountryFilter from "./components/CountryFilter";
import CountrySearch from "./components/CountrySearch";

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
    <div 
      className="
        py-[24px] px-[16px]
        flex flex-col
      "
    >
      <CountrySearch country={searchParams?.country}/>
      <CountryFilter regions={regions}/>
      <Countries region={searchParams?.region} country={searchParams?.country}/>
    </div>
  );
}
