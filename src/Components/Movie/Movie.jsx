import Watch from "../Watchbtn/Watchbtn";
import "./style.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const detailsVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  final: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
const Movie = ({
  imgSrc,
  alt,
  details,
  date,
  title,
  genre_ids,
  genre,
  setDisplay,
  data,
  display,
}) => {
  const [isClickedMovie, setClickMovie] = useState(false);
  const handleMovieClick = () => {
    setClickMovie(!isClickedMovie);
  };
  const desktopClick = () => {
    setDisplay(data);
    setDisplay({ ...data, ["isClicked"]: true, ["genre"] : genre });
  };
  const truncate =(str)=>{
    return str.length > 150 ? str.substring(0, 150) + "..." : str;
  }
  return (
    <div className="movie-cont" onClick={desktopClick}>
      <div className="movie bdr">
        <div className="img">
          <img
            src={`https://image.tmdb.org/t/p/original${imgSrc}`}
            alt={alt}
            className=""
          />
        </div>
        {/* <p className="movie-genre">{genre_ids.forEach((id) => genres[id].name)}</p> */}
        <p className="movie-genre">{
            genre
        }</p>
        <AnimatePresence>
          {isClickedMovie ? (
            <motion.div
              className="details mobile"
              variants={detailsVariants}
              initial="initial"
              animate="final"
              exit="exit"
              key="details"
            >
              <h3>{title}</h3>
              <p className="inner-details">{
                truncate(details)
              }</p>

              <span>
                <strong>Release Date:</strong>
                <p>{date}</p>
              </span>
              <div className="watch-cont">
                <a href="#" className="">
                  <Watch />
                </a>
              </div>
            </motion.div>
          ) : (
            <>
              <h3 className="">{title}</h3>
              <span>
                <strong>Release Date:</strong>
                <p> {date}</p>
              </span>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="a mobile">
        <button onClick={handleMovieClick}>
          {isClickedMovie ? "See less" : "View Details"}
        </button>
      </div>
    </div>
  );
};

export default Movie;
