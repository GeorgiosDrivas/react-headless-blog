import { createContext, ReactNode, useContext, useState } from "react";

type contextProp = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const SearchContext = createContext<contextProp | undefined>(undefined);

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
