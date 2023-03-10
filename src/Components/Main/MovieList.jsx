
import Movie from "../Movie/Movie";
import Empty from "../Empty/Empty";
import { AnimatePresence } from "framer-motion";

// image format
// https://image.tmdb.org/t/p/original/sv1xJUazXeYqALzczSZ3O6nkH75.jpg
const genres = {
  28: { name: "Action" },
  12: { name: "Adventure" },
  16: { name: "Animation" },
  35: { name: "Comedy" },
  80: { name: "Crime" },
  99: { name: "Documentary" },
  18: { name: "Drama" },
  10751: { name: "Family" },
  14: { name: "Fantasy" },
  36: { name: "History" },
  27: { name: "Horror" },
  10402: { name: "Music" },
  9648: { name: "Mystery" },
  10749: { name: "Romance" },
  878: { name: "Science Fiction" },
  10770: { name: "TV Movie" },
  53: { name: "Thriller" },
  10752: { name: "War" },
  37: { name: "Western" },
};
const MovieList = ({
  display,
  setDisplay,
  search,
  movies,
}) => {


  // This converts the genre array into genre strings
  const handleGenre = (genre_ids) => {
    let li = "";
    let n = genre_ids.length;
    genre_ids.forEach((id, index) => {
      li += genres[id].name;
      if (n > 1 && index != n - 1) {
        li += ", ";
      }
    });
    return li;
  };
  return (
    <>
      <AnimatePresence>
        {movies.length == 0 && search.isSearch ? (
          <Empty q={search.q} key="empty" />
        ) : (
          movies.map((movie) => (
            <Movie
              title={movie.title}
              genre_ids={movie.genre_ids}
              genre={handleGenre(movie.genre_ids)}
              imgSrc={movie.poster_path}
              key={movie.id}
              alt={movie.title}
              details={movie.overview}
              date={movie.release_date}
              setDisplay={setDisplay}
              data={movie}
              display={display}
            />
          ))
        )}
      </AnimatePresence>
    </>
  );
};

export default MovieList;
