import Watch from "../Watchbtn/Watchbtn";
import "./style.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const detailsVariants = {
    initial: {
        height: 0,
        opacity: 0,
    },
    final:{
        height: 'auto',
        opacity: 1,
        transition :{
            duration: 1.5,
        }
    },
    exit :{
        height: 0,
        opacity: 0,
        transition :{
            duration: 1,
        }
    }
}
const Movie = () => {
  const [isClickedMovie, setClickMovie] = useState(false);
  const handleMovieClick = () => {
    setClickMovie(!isClickedMovie);
  };
  return (
    <div className="movie-cont">
      <div className="movie">
        <div className="img">
          <img src="/assets/ginny.svg" alt="ginny" className="" />
        </div>
        <p className="movie-genre">Comedy, Drama</p>
        <AnimatePresence>
        {isClickedMovie ? (
          <motion.div className="details mobile"
          variants={detailsVariants}
          initial = "initial"
          animate = "final"
          exit = "exit"
          key = "details"
          >
            <h3>Ginny & Georgia</h3>
            <p className="inner-details">
              Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to
              protect their nation from intervening world powers in the wake of
              King T'Challa's .... View more
            </p>
            <span>
              <strong>Release Date:</strong>
              <p>Feb 24, 2021</p>
            </span>
            <div className="watch-cont">
              <a href="#" className="">
                <Watch />
              </a>
            </div>
          </motion.div>
        ) : (
            <>
            <h3>Ginny & Georgia</h3>
            <span>
              <strong>Release Date:</strong>
              <p>Feb 24, 2021</p>
            </span>
          </>
        )}
        </AnimatePresence>
        
      </div>
      <div className="a mobile">
        <button onClick={handleMovieClick}>{
            isClickedMovie ? 'See less': 'View Details'
        }</button>
      </div>
    </div>
  );
};

export default Movie;
