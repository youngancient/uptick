import "./style.css";
import { AnimatePresence, motion } from "framer-motion";
import Watch from "../Watchbtn/Watchbtn";

const displayVariants = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};
const eachVariants = {
  initial: {
    y: -30,
  },
  final: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};
const noDisplayVariants = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      delay : 2,
      duration: 0.75,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};
const Display = ({ display }) => {
  const truncate = (str) => {
    return str.length > 300 ? str.substring(0, 300) + "..." : str;
  };
  return (
    <div className="display-cont">
      <AnimatePresence>
      {display.isClicked ? (
        <motion.div
          className="display"
          variants={displayVariants}
          initial="initial"
          animate="final"
        >
          <div className="img">
            <img
              src={`https://image.tmdb.org/t/p/original${display.poster_path}`}
              alt={display.title}
              className=""
            />
          </div>
          <p className="movie-genre">{display.genre}</p>
          <motion.h3 variants={eachVariants} initial="initial" animate="final">
            {display.title}
          </motion.h3>
          <motion.p
            className="inner-details"
            variants={eachVariants}
            initial="initial"
            animate="final"
          >
            {truncate(display.overview)}
          </motion.p>
          <motion.span
            variants={eachVariants}
            initial="initial"
            animate="final"
          >
            <strong>Release Date:</strong>
            <p>{display.release_date}</p>
          </motion.span>
          <motion.div
            className="watch-cont"
            variants={eachVariants}
            initial="initial"
            animate="final"
          >
            <a href="#" className="">
              <Watch />
            </a>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="no-display"
          variants={noDisplayVariants}
          initial="initial"
          animate="final"
          exit= "exit"
          key ="no-display"
        >
          <p>Click a movie card to display details!!!</p>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Display;
