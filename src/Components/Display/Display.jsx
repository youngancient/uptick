import "./style.css";
import { motion } from "framer-motion";
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
const eachVariants ={
  initial:{
    y : -50,
  },
  final:{
    y: 0,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  }
}
const Display = ({display}) => {
  const truncate =(str)=>{
    return str.length > 300 ? str.substring(0, 300) + "..." : str;
  }
  return (
    <div className="display-cont">
      {
        display.isClicked?
        <motion.div
        className="display"
        variants={displayVariants}
        initial="initial"
        animate="final"
      >
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/original${display.poster_path}`} alt={display.title} className="" />
        </div>
        <p className="movie-genre">
          {display.genre}
        </p>
        <motion.h3
        variants={eachVariants}
        initial="initial"
        animate="final"
        >{display.title}</motion.h3>
        <motion.p className="inner-details"
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
        <motion.div className="watch-cont"
        variants={eachVariants}
        initial="initial"
        animate="final"
        >
          <a href="#" className="">
            <Watch />
          </a>
        </motion.div>
      </motion.div>
      :<></>
      }
    </div>
  );
};

export default Display;
