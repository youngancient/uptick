import { useEffect, useRef, useState } from "react";
import "./style.css";
import { Checkbox } from "antd";

const options = [
  {
    label: "Action",
    value: 28,
  },
  {
    label: "Adventure",
    value: 12,
  },
  {
    label: "Animation",
    value: 16,
  },
  {
    label: "Comedy",
    value: 35,
  },
  {
    label: "Crime",
    value: 80,
  },
  {
    label: "Documentary",
    value: 99,
  },
  {
    label: "Drama",
    value: 18,
  },
  {
    label: "Family",
    value: 10751,
  },
  {
    label: "Fantasy",
    value: 14,
  },
  {
    label: "History",
    value: 36,
  },
  {
    label: "Horror",
    value: 27,
  },
  {
    label: "Music",
    value: 10402,
  },
  {
    label: "Mystery",
    value: 9648,
  },
  {
    label: "Romance",
    value: 10749,
  },
  {
    label: "SciFi",
    value: 878,
  },
  {
    label: "TV Movie",
    value: 10770,
  },
  {
    label: "Thriller",
    value: 53,
  },
  {
    label: "War",
    value: 10752,
  },
  {
    label: "Western",
    value: 37,
  },
];

const MyCheckbox = ({
  duplicateMovies,
  movies,
  setMovies,
}) => {
  // const [checkboxMovies, setCheckboxMovies] = useState()
  // This handles the clicking of the checkboxes
 // this handles filtering via checkboxes, it gets the selected checkboxes 
  // it filters the movies-statebased on the checkboxes.
  // backupmovie state is used to back up the movie state

  const handleSelect = (checkedValues) => {
    if (checkedValues && checkedValues.length !== 0) {
      
      // filter the duplicated movies state and update the movies
      const filterMovies = duplicateMovies.filter((movie) => {
        return checkedValues.every(
          (elem) => movie.genre_ids.includes(elem) === true
        );
      });
      setMovies(filterMovies);
    } else {
      setMovies(duplicateMovies);
    }
  };
  return (
    <div className="checkbox">
      <Checkbox.Group
        options={options}
        onChange={handleSelect}
        className="group"
      />
    </div>
  );
};

export default MyCheckbox;
