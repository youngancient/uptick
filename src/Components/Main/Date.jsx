import { DatePicker } from "antd";

const Date = ({ movies, setMovies, duplicateMovies }) => {

  const handleSelect = (date, dateString) => {
    if(dateString !== ""){
        const filterMovies = movies.filter((item) => {
            return item.release_date == dateString;
          });
          setMovies(filterMovies)
    }else{
        setMovies(duplicateMovies);
    }
  };
  return (
    <DatePicker
      onChange={handleSelect}
      getPopupContainer={(triggerNode) => {
        return triggerNode.parentNode;
      }}
    />
  );
};

export default Date;
