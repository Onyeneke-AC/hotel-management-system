import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "./Input";

function SearchGuest() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (query.length) {
      newSearchParams.set("searchValue", query);
    } else {
      newSearchParams.delete("searchValue");
    }
    setSearchParams(newSearchParams);
  }, [query, setSearchParams, searchParams]);

  return (
    <Input
      placeholder={`search guest...`}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="search"
    />
  );
}

export default SearchGuest;
