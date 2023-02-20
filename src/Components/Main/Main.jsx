import Checkbox from "../Checkbox/Checkbox";
import "./style.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Movie from "../Movie/Movie";
import Display from "../Display/Display";
import MovieList from "./MovieList";

const checkboxes = [
  { name: "comedy" },
  { name: "action" },
  { name: "horror" },
  { name: "scifi" },
  { name: "romance" },
];

const dropVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  final: {
    opacity: 1,
    x: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: {
      duration: 0.8,
    },
  },
};
const dropSvgVariants = {
  initial: {
    transform: "rotateZ(0deg)",
  },
  final: {
    transform: "rotateZ(180deg)",
    transition: {
      duration: 1,
    },
  },
};
const Main = () => {
  // for dropdowns
  const [clickGenre, setClickGenre] = useState(false);
  const [clickRelease, setClickRelease] = useState(false);
  const handleGenre = () => {
    setClickGenre(!clickGenre);
  };
  const handleRelease = () => {
    setClickRelease(!clickRelease);
  };

  // state for  the display component
  const [display, setDisplay] = useState({
    Title: "",
    date: "",
    imdbID: "",
    genre: "",
    Type: "",
    Poster: "",
    details: "",
    isClicked: false,
  });

  // state for search input
  const [search,setSearch] = useState({
    q: "",
    isSearch: false,
  })
  const handleSearch =(event)=>{
    let query = event.target.value.trim();
    if(query == ""){
      setSearch({
        q: query,
        isSearch: false,
      });
    }else{
      setSearch({
        q: query,
        isSearch: true,
      });
    }
  }
  return (
    <main className="">
      <div className="main">
        <div className="searchbar">
          <div className="dropdown desktop">
            <div className="genre">
              <div className="drop" onClick={handleGenre}>
                <p>Genre</p>
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  variants={dropSvgVariants}
                  initial="initial"
                  animate={clickGenre ? "final" : ""}
                >
                  <path
                    d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.95"
                    stroke="#023849"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </div>
              <AnimatePresence>
                {clickGenre ? (
                  <motion.ul
                    className=""
                    variants={dropVariants}
                    initial="initial"
                    animate="final"
                    key="genre-popup"
                    exit="exit"
                  >
                    {checkboxes.map((checkbox) => (
                      <Checkbox key={checkbox.name} name={checkbox.name} />
                    ))}
                  </motion.ul>
                ) : (
                  <></>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="dropdown desktop">
            <div className="release-date">
              <div className="drop" onClick={handleRelease}>
                <p>Release Date</p>
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  variants={dropSvgVariants}
                  initial="initial"
                  animate={clickRelease ? "final" : ""}
                >
                  <path
                    d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.95"
                    stroke="#023849"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </div>
              <AnimatePresence>
                {clickRelease ? (
                  <motion.ul
                    variants={dropVariants}
                    initial="initial"
                    animate="final"
                    key="release-popup"
                    exit="exit"
                  >
                    <li>
                      <input type="date" name="release" id="" />
                    </li>
                  </motion.ul>
                ) : (
                  <></>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="search-input ml">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.75">
                <path
                  d="M20 11C20 12.78 19.4722 14.5201 18.4832 16.0001C17.4943 17.4802 16.0887 18.6337 14.4442 19.3149C12.7996 19.9961 10.99 20.1743 9.24419 19.8271C7.49836 19.4798 5.89472 18.6226 4.63604 17.364C3.37737 16.1053 2.5202 14.5016 2.17294 12.7558C1.82567 11.01 2.0039 9.20038 2.68509 7.55585C3.36628 5.91131 4.51983 4.50571 5.99987 3.51677C7.47991 2.52784 9.21997 2 11 2"
                  stroke="#011318"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 6.13C13.15 5.03 13.56 3.66 14.72 3.29C15.33 3.09 16.08 3.26 16.51 3.85C16.91 3.24 17.69 3.1 18.29 3.29C19.45 3.66 19.86 5.03 19.51 6.13C18.96 7.88 17.04 8.79 16.51 8.79C15.97 8.79 14.07 7.9 13.5 6.13ZM18.93 20.69C19.46 22.29 20.67 22.45 21.6 21.05C22.45 19.77 21.89 18.72 20.35 18.72C19.21 18.71 18.57 19.6 18.93 20.69Z"
                  stroke="#011318"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>

            <input
              type="text"
              name="input"
              id=""
              placeholder="Search for a movie, genre, tv shows..."
              onChange={handleSearch}
              onKeyUp = {handleSearch}
            />
          </div>
          <div className="desktop-btn desktop">
            <button type="submit">Search</button>
          </div>
          <div className="mobile-btn mobile">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.54666 12.7133C9.54666 13.12 9.28 13.6533 8.94 13.86L8 14.4667C7.12667 15.0067 5.91333 14.4 5.91333 13.32V9.75333C5.91333 9.28 5.64667 8.67333 5.37333 8.34L2.81333 5.64666C2.47333 5.30666 2.20667 4.70666 2.20667 4.3V2.75333C2.20667 1.94666 2.81333 1.34 3.55333 1.34H12.4467C13.1867 1.34 13.7933 1.94666 13.7933 2.68666V4.16666C13.7933 4.70666 13.4533 5.38 13.12 5.71333"
                stroke="#023849"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.2467 11.4133L12.58 10.7467M10.7134 11.0133C11.2791 11.0133 11.8218 10.7886 12.2218 10.3885C12.6219 9.98842 12.8467 9.4458 12.8467 8.88001C12.8467 8.31421 12.6219 7.77159 12.2218 7.37151C11.8218 6.97144 11.2791 6.74667 10.7134 6.74667C10.1476 6.74667 9.60493 6.97144 9.20486 7.37151C8.80478 7.77159 8.58002 8.31421 8.58002 8.88001C8.58002 9.4458 8.80478 9.98842 9.20486 10.3885C9.60493 10.7886 10.1476 11.0133 10.7134 11.0133Z"
                stroke="#023849"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Filter</span>
          </div>
        </div>
        <div className="all-display">
          <div className="group-display">
            <MovieList display={display} setDisplay={setDisplay} search={search}/>
          </div>
          <div className="single-display desktop">
            <Display display={display} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
