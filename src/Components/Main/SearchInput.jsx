import { useEffect, useState } from "react";
import axios from "axios";

const SearchInput = ({
  setDuplicateMovies,
  movies,
  setMovies,
  setSearch,
  search,
}) => {
  // state for search input
  function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  const handleSearch = (event) => {
    let query = event.target.value.trim();
    if (query == "") {
      setSearch({
        q: query,
        isSearch: false,
      });
    } else {
      setSearch({
        q: query,
        isSearch: true,
      });
    }
  };
  useEffect(() => {
    if (search.isSearch) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=bdb240741c8f4165f5d6af9277692339&query=${search.q}`
        )
        .then((res) => {
          setMovies(res.data.results);
          setDuplicateMovies(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=bdb240741c8f4165f5d6af9277692339&query=${generateRandomLetter()}`
        )
        .then((res) => {
          setMovies(res.data.results);
          setDuplicateMovies(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [search.q]);
  return (
    <input
      type="text"
      name="input"
      id=""
      placeholder="Search for a movie, genre, tv shows..."
      onChange={handleSearch}
      onKeyUp={handleSearch}
    />
  );
};

export default SearchInput;
