import { Suspense } from "react";
import { fetchCountries, fetchRegions } from "./api/data";
import Countries from "./components/Countries";
import CountryFilter from "./components/CountryFilter";
import CountrySearch from "./components/CountrySearch";

interface HomeProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}
export default async function Home(props: HomeProps) {
  const searchParams = await props.searchParams;
  const regions = await fetchRegions();
  const countries = await fetchCountries(searchParams?.query);

  return (
    <div 
      className="
        py-[24px] px-[16px]
        flex flex-col
      "
    >
      <CountrySearch />
      <CountryFilter regions={regions}/>
      <Countries countries={countries}/>
    </div>
  );
}
