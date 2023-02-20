import { useRef, useState } from "react";
import "./style.css";
const Checkbox = ({name, value, filterGenre, setFilterGenre}) => {
  // const checkRef = useRef();
  const [checked, setChecked] = useState(0);
  const handleSelect =(e)=>{
    setChecked(checked+1);
    let c = e.target.value;
    setFilterGenre([...filterGenre,parseInt(c)]);
    console.log(checked)
    
  }
  return (
    <div className="checkbox">
      <span>{name}</span>
      <input type="checkbox" name={name} id="" value={value} onChange={handleSelect} />
    </div>
  );
};

export default Checkbox;
