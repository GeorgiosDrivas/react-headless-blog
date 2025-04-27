import { useSearchContext } from "../searchContext";

export default function Search() {
  const { searchQuery, setSearchQuery } = useSearchContext();

  return (
    <>
      <div id="search-wrap">
        <input
          type="text"
          placeholder="Article title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
        />
      </div>
    </>
  );
}
