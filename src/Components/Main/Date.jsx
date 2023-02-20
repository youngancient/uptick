const Date = ({filterDate, setFilterDate}) => {
    const handleSelect =(e)=>{
        let date = e.target.value;
        setFilterDate(date);
        console.log(filterDate)
    }
    return ( 
        <input type="date" name="release" id="" onChange={handleSelect} />
     );
}
 
export default Date;