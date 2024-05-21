import { createContext, useContext, useEffect, useState } from "react";
import { searchCharacters, useDebounce } from "../constant/debounceSearch";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [sidebarHide, setSidebarHide] = useState(true);
  const [gameSearchResults, setGameSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchCharacters(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setGameSearchResults(results.data.results)
      });
    } else {
      setGameSearchResults([])
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <Context.Provider value={{ sidebarHide, setSidebarHide, isSearching, setSearchTerm, gameSearchResults }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
