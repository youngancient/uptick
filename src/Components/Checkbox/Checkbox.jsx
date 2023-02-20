import "./style.css";
const Checkbox = ({name}) => {
  return (
    <div className="checkbox">
      <span>{name}</span>
      <input type="checkbox" name={name} id="" value={name} />
    </div>
  );
};

export default Checkbox;
