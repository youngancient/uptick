import "./style.css";
const Checkbox = ({name, value}) => {
  return (
    <div className="checkbox">
      <span>{name}</span>
      <input type="checkbox" name={name} id="" value={value} />
    </div>
  );
};

export default Checkbox;
