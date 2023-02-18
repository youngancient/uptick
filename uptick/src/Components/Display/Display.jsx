import "./style.css";
import { motion } from "framer-motion";
import Watch from "../Watchbtn/Watchbtn";
const Display = () => {
  return (
    <div className="display-cont">
      <div className="display">
        <div className="img">
          <img src="/assets/panther.svg" alt="panther" className="" />
        </div>
        <p className="movie-genre">
          Action, Superhero, Science fiction, Adventure, Fantasy.
        </p>
        <h3>Black Panther</h3>
        <p className="innerdetails">
          Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to
          protect their nation from intervening world powers in the wake of King
          T'Challa's death. As the Wakandans strive to embrace their next
          chapter, the heroes must band together with the help of War Dog Nakia
          and Everett Ross and forge a new path for the kingdom of Wakanda.
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
      </div>
    </div>
  );
};

export default Display;
