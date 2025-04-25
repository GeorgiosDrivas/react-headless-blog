import { useState } from "react";
import SearchSvg from "../assets/searchSvg";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");

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
