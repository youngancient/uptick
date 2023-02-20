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
  const truncate =(str, num)=>{
    return str.length > num ? str.substring(0, num) + "..." : str;
  }
  // const truncateTitle =(str)=>{
  //   return str.length > 40 ? str.substring(0, 40) + "..." : str;
  // }
  return (
    <div className="movie-cont" onClick={desktopClick}>
      <div className="movie bdr">
        <div className="img">
          <img
            src={`https://image.tmdb.org/t/p/original${imgSrc}`}
            alt={truncate(alt,40)}
            className=""
          />
        </div>
        {/* <p className="movie-genre">{genre_ids.forEach((id) => genres[id].name)}</p> */}
        <p className="movie-genre">{
            genre == "" ? "No data" : truncate(genre,50)
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
                truncate(details, 150)
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
              <h3 className="">{truncate(title,40)}</h3>
              <span>
                <strong>Release Date:</strong>
                <p> {date == ""? "No data" : date}</p>
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
