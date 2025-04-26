import SearchSvg from "../assets/searchSvg";
import { NavProps } from "../types/search-types";

export default function Search({ searchQuery, setSearchQuery }: NavProps) {
  const handleSearch = (SearchString: string) => {
    console.log("Searching for:", SearchString);
  };

  return (
    <>
      <div id="search-wrap">
        <input
          type="text"
          placeholder="Article title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
        />
        <button onClick={() => handleSearch(searchQuery)}>
          <SearchSvg />
        </button>
      </div>
    </>
  );
}
