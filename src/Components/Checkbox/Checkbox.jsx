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
  const count =(array)=>{
    return array.length;
  }
  // This handles the clicking of the checkboxes
  // it updates the check state and updates the array of selected genre - filterGenre
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
    if(count(filterGenre) == 0){
      setIsFilterGenre(false);
    }else{
      setIsFilterGenre(true);
    }
    setChecked(!checked);
    // console.log(filterGenre, count(filterGenre));
  };
  return (
    <div className="checkbox">
      <label htmlFor={name} className="">{name}</label>
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
