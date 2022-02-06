import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState([]);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    );
    setJokes(response.data.result);
  
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getResults();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          className="searchInput"
          type="search"
          placeholder="Free text search..."
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          value={query}
          autoFocus={true}
        ></input>
      </form>

      {jokes.map((joke) => {
        return (
          <>
            <div className="ramdomListJoke p-4 border" key={joke.id}>
                  <div className="ramdomUnitBlockJoke">{joke.value}</div>
                    <div className="ramdomCategory"><div className="border p-2" style={{marginLeft: 510}}>{joke.categories[0]}</div></div>
                  </div>
          </>
        );
      })}
    </>
  );
};

export default Search;
