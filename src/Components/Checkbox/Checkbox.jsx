import { useEffect, useRef, useState } from "react";
import "./style.css";
const Checkbox = ({
  name,
  value,
  filterGenre,
  setFilterGenre,
  isFilterGenre,
  setIsFilterGenre,
}) => {
  // const checkRef = useRef();
  const [checked, setChecked] = useState(true);
  const handleSelect = (e) => {
    let c = parseInt(e.target.value);
    if (checked == true) {
      setFilterGenre([...filterGenre, c]);
    } else {
      setFilterGenre(
        filterGenre.filter(function (gen) {
          return gen !== c;
        })
      );
    }
    if(filterGenre.length == 0){
      setIsFilterGenre(false);
    }else{
      setIsFilterGenre(true);
    }
    setChecked(!checked);
    console.log(isFilterGenre, filterGenre);
  };
  return (
    <div className="checkbox">
      <span>{name}</span>
      <input
        type="checkbox"
        name={name}
        id=""
        value={value}
        onChange={handleSelect}
      />
    </div>
  );
};

export default Checkbox;
