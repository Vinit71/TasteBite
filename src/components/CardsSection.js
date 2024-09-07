import Card from "./Card";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import resList2 from "../utils/mockData2"
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const CardsSection = () =>{
    // const [filterCards, setFilterCards] = useState([]);
    const [filterCards, setFilterCards] = useState([]);
    const [searchFilter, setSearchFilter] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        console.log("useEffect called");
        // fetchedData();
        localFetchedData();
    },[])
    
    // 2nd way if api not working------------
    const localFetchedData = () =>{
      // creating api problems as above api broke in between by itself
      setTimeout(() => {  
        setFilterCards(resList2)
        //also updating the list for searching opertions (main rendered list)
        setSearchFilter(resList2);
      }, 800);
    }

    // return this
    if(filterCards.length === 0){
      return ( <ShimmerUI /> )
    }

    // else this
    return (
        <>
        <button onClick={()=>{
          const filteredList = resList.filter((res)=> res.info.avgRating > 4.4);
          setSearchFilter(filteredList)}}>Top Rated Resturents</button>
          {/* {console.log(filterCards)} */}
            <br />
          <input type="text"  value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
          }}/>
          <button onClick={()=>{
            const filterOperation = filterCards.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setSearchFilter(filterOperation);
            // setFilterCards(searchFilter);
            // console.log(searchText)
            }}>Search</button>

        <div className='cardsSection'>
          {
            searchFilter.map((resturent)=>(
            <Link to={`/restInfo/${resturent.info.id}`} key={resturent.info.id}><Card resData = {resturent}/>
            </Link>
            ))  
          }
        </div>
        </>
    )
}

export default CardsSection;