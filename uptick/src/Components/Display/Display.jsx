import "./style.css";
import { motion } from "framer-motion";
import Watch from "../Watchbtn/Watchbtn";

const displayVariant = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const Display = ({display}) => {
  
  return (
    <div className="display-cont">
      {
        display.isClicked?
        <motion.div
        className="display"
        variants={displayVariant}
        initial="initial"
        animate="final"
      >
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/original${display.poster_path}`} alt={display.title} className="" />
        </div>
        <p className="movie-genre">
          {display.genre}
        </p>
        <h3>{display.title}</h3>
        <p className="innerdetails">
          {display.overview}
        </p>
        <span>
          <strong>Release Date:</strong>
          <p>{display.release_date}</p>
        </span>
        <div className="watch-cont">
          <a href="#" className="">
            <Watch />
          </a>
        </div>
      </motion.div>
      :<></>
      }
    </div>
  );
};

export default Display;
